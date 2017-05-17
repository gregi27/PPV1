import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FileUploader} from "ng2-file-upload";
import {Categories} from "../category";
import {FlashMessagesService} from "angular2-flash-messages";
import {forEach} from "@angular/router/src/utils/collection";
import {TagsService} from "../../tags/tags.service";
import {isNull} from "util";
import {Auth} from "../../services/auth.service";

//declare var $: any;

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  providers: [CategoryService, FlashMessagesService, TagsService],
})
export class NewCategoryComponent implements OnInit {

  value = false;
  item: Object = {};
  intern_links: Array<any> = [];
  external_urls: Array<any> = [];
  selected_tags: Array<any> = [];
  items: any;
  colons: any;
  category: string;
  all_categories: Array<string> =[];
  all_tags : Array<any>;
  insertId;
  origi_tags :  Array<any> = [];
  EventCheckbox : Boolean = false;

  profile:any;

  ngtags = '';
  ngcommenturl ='';
  ngurl='';
  ngcommentlink ='';
  ngitem = '';
  ngcategory = '';



  public uploader:FileUploader = new FileUploader({url: 'api/publications', itemAlias: 'file'});

  constructor(private _elRef: ElementRef, private _categoryService: CategoryService, private _tagsService: TagsService, private router: Router, private route: ActivatedRoute, private _flashMessagesService: FlashMessagesService, private auth:Auth) {

  }

  ngOnInit():any {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this._flashMessagesService.grayOut(true);
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      //console.log("ImageUpload:uploaded:", item, status, response);
    };

    this.all_tags = [];
    this.items = [];
    this.intern_links = [];
    this.external_urls = [];
    this.selected_tags = [];
    this.origi_tags = [];
    this.item['visited'] = 0;
    this.item['presented'] =0;
    this.item['user_id'] = this.profile.user_id;
    if (this.route.snapshot.params['id']){
      let id = this.route.snapshot.params['id'];
      this._categoryService.getOne(id).subscribe(contacts => {
        let keys = Object.keys(contacts[0]);
        for (let i of keys){
          if (contacts[0][i] != null){
            this.item[i]=contacts[0][i];
          }
        }
        //this.item = contacts[0];
        this.intern_links = JSON.parse(contacts[0].intern_links);
        this.external_urls = JSON.parse(contacts[0].external_urls);
        this.selected_tags = JSON.parse(contacts[0].tags);
        this.origi_tags = JSON.parse(contacts[0].tags);
      });
    }

    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.colons = Categories[this.category];
      this.all_categories = Object.keys(Categories);
      this.getTags();
    });



  }



  addItem(){
    let result, res;

    let name: Object = {};
    this.uploader.onBeforeUploadItem = (item:any) => {
      name['files'] = item._file.name;

    };
    this.uploader.uploadAll();
    name['id_category'] = this.category;
    name['intern_links'] = JSON.stringify(this.intern_links);
    name['external_urls'] = JSON.stringify(this.external_urls);
    name['used_in_links'] = '';
    name['tags'] = JSON.stringify(this.selected_tags);

    if (this.route.snapshot.params['id']) {
      result = this._categoryService.updateItem(this.item, name, this.route.snapshot.params['id']);
    }else {
      result = this._categoryService.saveItem(this.item, this.category, name);
      if (this.EventCheckbox)
        this._categoryService.createEvent(this.item);
    }

    result.subscribe(x => {
      for (var i = 0, len = this.intern_links.length; i < len; i++) {
        if (this.route.snapshot.params['id']){
          this._categoryService.saveLinks(this.route.snapshot.params['id'], this.item['name'], this.intern_links[i]);
        }else {
          this._categoryService.saveLinks(x['insertId'], this.item['name'], this.intern_links[i]);
        }
      }
      if (this.route.snapshot.params['id']) {
        this._tagsService.saveRecord(this.selected_tags, this.route.snapshot.params['id']);
      }else{
        this._tagsService.saveRecord(this.selected_tags, x['insertId']);
      }
      //console.log('x insert:'+x['insertId']+ 'this inser'+ this.insertId)
      //this._flashMessagesService.show('Projekt bol úspešne uložený!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/category/'+this.category]);
    })

  }



  changeCheckboxValue(checkbox){
    this.item[checkbox]= !this.value;
    this.value = !this.value;
  }

  changeEventCheckbox(){
    this.EventCheckbox= !this.EventCheckbox;
  }

  onCategorySelectChange(Value) {
    this.getAll(Value);
  }

  getAll(category) {
    this._categoryService.getAll(category, this.profile.user_id).subscribe(items => {
      this.items = items;
    });
  }

  addInternLink(category, id, comment){
    if(category ==="Select category" && id ==="Select item"){
      this._flashMessagesService.show('Category and item must be select', { cssClass: 'alert alert-danger', timeout: 3000 });
    }else {
      let item;
      item = this.items.find(item => item.id === Number(id));
      this.intern_links.push({
        id: id,
        category: category,
        name: item.name,
        comment: comment,
      });
      this.ngcommentlink ='';
      this.ngitem = '';
      this.ngcategory = '';
    }

  }

  addExternalUrl(url, comment){
    console.log('url'+url+'comment'+comment);
    if(comment ==="" && url ===""){
      this._flashMessagesService.show('Url and comment must be filled', { cssClass: 'alert alert-danger', timeout: 3000 });
    }else {
      this.external_urls.push({
        url: url,
        comment: comment,
      });
      this.ngcommenturl ='';
      this.ngurl='';
    }
  }

  getTags(){
    this._tagsService.getAll(this.profile.user_id).subscribe(items => {
      this.all_tags = items;
    });
  }

  addTag(tagId){
    let tag = this.all_tags.filter(function( obj ) {
      return obj.id === Number(tagId);
    });
    this.selected_tags.push({
      tagId: tagId,
      title: tag[0]['title'],
    });
    this.ngtags = '';
  }

  deleteUrl(index, name){
    if(confirm("Are you sure to delete "+name)) {
      this.external_urls.splice(index, 1);
    }
  }

  deleteLink(index, name){
    if(confirm("Are you sure to delete "+name)) {
      this.intern_links.splice(index, 1);
    }
  }

  deleteTag(index, name){
    if(confirm("Are you sure to delete "+name)) {
      for (let tag in this.origi_tags) {
        if (Number(this.origi_tags[tag]['tagId']) === Number(this.selected_tags[index].tagId)) {
          this._tagsService.deleteRecords(this.selected_tags[index].tagId, this.item['id'])
        }
      }
      this.selected_tags.splice(index, 1);
    }
  }


}

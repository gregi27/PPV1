import { Component, OnInit } from '@angular/core';
import {TagsService} from "../tags.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../category/category.service";
import {root} from "rxjs/util/root";

@Component({
  selector: 'app-tags-search',
  templateUrl: './tags-search.component.html',
  styleUrls: ['./tags-search.component.css'],
  providers: [TagsService, CategoryService]
})
export class TagsSearchComponent implements OnInit {

  list: Array<any>;
  items: Array<any>;
  all_tags : Array<any>;
  Filter: any = {name: ''};
  profile:any;

  constructor( private _tagsService: TagsService, private _categoryService: CategoryService,  private router: Router) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.items = [];
    this.list = [];
    this.all_tags = [];
    this.getAll();
  }

  getAll(){
    this._tagsService.getAll(this.profile.user_id).subscribe(items => {
      this.all_tags = items;

      //let rootTags = items.filter(function(n){ return n.parentID === null });
      //let childTags = items.filter(function (n) { return n.parentID != null });



      //console.log(this.orderChildren(items));

    });
  }
  onTagsSelectChange(tagId){
    let list = '';
    let arlist = [];
    this.items = [];
    this._tagsService.getList(tagId).subscribe(x => {
      this._tagsService.getListByParent(tagId).subscribe(y =>{
        list = x[0].list_of_records;
        for (let i in y){
          list += y[i].list_of_records;
        }
        arlist = list.split(',');
        if (arlist.length>0)
          arlist = arlist.filter(function(n){ return n != "" });
        if (arlist.length>0){
          arlist = arlist.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

          this._categoryService.getList(arlist).subscribe(items =>{
            this.items = items;
            }

        )}
        });



    });

  }



}

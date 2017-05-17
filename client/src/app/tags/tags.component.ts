import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TagsService} from "./tags.service";
import {Auth} from "../services/auth.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers: [TagsService],
})
export class TagsComponent implements OnInit {

  tag : Object = {};
  all_tags : Array<any>;
  rootTags : Array<Object> = [];
  childTags : Array<Object> = [];
  profile:any;

  constructor(private route: ActivatedRoute, private _tagsService: TagsService, private router: Router, private auth:Auth) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.tag = {};
    this.all_tags = [];
    this.tag['list_of_records'] = '';
    this.tag['user_id'] = this.profile.user_id;
    this.getAll();
  }

  getAll(){
    this._tagsService.getAll(this.profile.user_id).subscribe(items => {
      this.all_tags = items;

      //this.rootTags = items.filter(function(n){ return n.parentID === null });
      //this.childTags = items.filter(function (n) { return n.parentID != null });

      //console.log(this.orderChildren(items));

    });
  }

  orderChildren(data){
  let tree = [];
  for(let value in data){
    if(data[value]['parentID'] == null){  // Values without parents
      tree[data[value]['id']] = this.goodParenting(data[value], data);
    }
  }
  return tree;
}

  goodParenting(parent, childPool){
   // console.log(childPool);
  for(let child in childPool){
    //console.log(child);
    //console.log(parent['id'], childPool[child]);
    if(parent['id'] == childPool[child]['parentID']){
      parent['children'] = [];
      parent['children'][childPool[child]['id']] = this.goodParenting(childPool[child], childPool);
    }
  }
  return parent;
}

  addTag(){
    let result;

    result = this._tagsService.saveTag(this.tag);

    result.subscribe(x => {
      //this._flashMessagesService.show('Projekt bol úspešne uložený!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['']);
    })
  }

  onTagsSelectChange(parentId){
    this.tag['parentID'] = parentId;
  }

}

import { Component, OnInit } from '@angular/core';
import {Categories} from "./category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "./category.service";
import {Auth} from "../services/auth.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {

  items: any;
  colons: any;
  category: string;
  Filter: any = {name: ''};
  profile:any;

  constructor(private route: ActivatedRoute, private _categoryService: CategoryService, private auth:Auth) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.colons = Categories[this.category];
      this.items = [];
      this.getAll(this.category, this.profile.user_id);
    });

  }

  getAll(category, user_id){
    this._categoryService.getAll(category, user_id).subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(id, name) {
    if (confirm("Are you sure to delete " + name)) {
      var items = this.items;
      this._categoryService.deleteItem(id).subscribe(data => {
          for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
              items.splice(i, 1);
            }
          }
        }
      );
    }
  }

}

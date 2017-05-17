import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Auth} from "../../services/auth.service";

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css'],
  providers: [CategoryService],
})
export class DetailCategoryComponent implements OnInit {

  item: Object = {};
  intern_links : Array<any> = [];
  external_urls : Array<any> = [];
  used_in_links : Array<any> = [];
  selected_tags : Array<any> = [];
  visited : boolean = false;
  presented : boolean = false;

  constructor(private route: ActivatedRoute, private _categoryService: CategoryService, private auth:Auth) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.item = {};
    this.intern_links = [];
    this.external_urls = [];
    this.used_in_links = [];
    this.selected_tags = [];

    this._categoryService.getOne(id).subscribe(contacts => {
      this.item = contacts[0];
      this.intern_links = JSON.parse(contacts[0].intern_links);
      this.external_urls = JSON.parse(contacts[0].external_urls);
      this.used_in_links = JSON.parse('['+contacts[0].used_in_links.substring(0,contacts[0].used_in_links.length-1)+']');
      this.selected_tags = JSON.parse(contacts[0].tags);
      if (String(contacts[0].visited) === "1")
        this.visited = true;
      if (String(contacts[0].presented) === "1")
        this.presented = true;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "./search.service";
import {Auth} from "../services/auth.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  search_input: string;
  items: Array<any>;

  Filter: any = {name: ''};
  profile: any;
  constructor(private _searchService: SearchService,  private router: Router, private auth:Auth) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.items = [];
    this.search_input = '';
  }

  searchchange(newValue){
    this.search_input = newValue;
    if(this.search_input.length>2){
    this._searchService.getSearch(this.search_input, this.profile.user_id).subscribe(items =>{
      this.items = items;
    });
  }}

}

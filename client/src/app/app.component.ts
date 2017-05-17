import { Component } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {Categories} from "./category/category";
import {Auth} from "./services/auth.service";




@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  all_categories: Array<string> =[];

  constructor(private _flashMessagesService: FlashMessagesService, private auth:Auth){
    this.all_categories = Object.keys(Categories);


  }
}


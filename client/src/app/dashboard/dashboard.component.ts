import { Component, OnInit } from '@angular/core';
import {Auth} from "../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile:any;

  constructor(private auth:Auth){

  }

  ngOnInit() {
  }

}

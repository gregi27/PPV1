import { Component, OnInit } from '@angular/core';
import {Auth} from "../services/auth.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private auth:Auth) { }

  ngOnInit() {
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Auth} from "../services/auth.service";

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})

export class CalComponent implements OnInit {


  constructor(private auth:Auth) { }

  ngOnInit() {
  }


}

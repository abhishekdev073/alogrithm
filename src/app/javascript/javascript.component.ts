import { Component, OnInit } from '@angular/core';
import { data } from '../files/javascript'
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  jsData: any

  constructor() { 
    this.jsData = data;
  }

  ngOnInit() {
  }
  tabChange(event) {
    if (event.index == 0) {
      this.jsData = data;
    } else if (event.index == 1) {
      this.jsData = 2;
    }
  }

}




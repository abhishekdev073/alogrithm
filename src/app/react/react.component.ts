import { Component, OnInit } from '@angular/core';
import { data } from '../files/react'
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {
  jsData: any;
  constructor() { }

  ngOnInit() {
    this.jsData = data.data;
  }
  tabChange(event) {
    if (event.index == 0) {
      this.jsData = data.data;
    } 
  }

}

import { Component, OnInit } from '@angular/core';
import { data } from '../files/node'
//import { data } from '../files/node'
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
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
     // this.jsData = dataQ;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { data } from '../files/dot-net'
import { dataQ } from '../files/dot-netq'
@Component({
  selector: 'app-dot-net',
  templateUrl: './dot-net.component.html',
  styleUrls: ['./dot-net.component.scss']
})
export class DotNetComponent implements OnInit {

  angularData: any = ''
  expandAll = false;
  constructor() {
    this.angularData = data;
  }
  ngOnInit() {
  }
  tabChange(event) {
    if (event.index == 0) {
      this.angularData = data;
    } else if (event.index == 1) {
      this.angularData = dataQ;
    }
  }

}

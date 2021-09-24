import { Component, OnInit } from '@angular/core';
import { data } from '../files/sql'
@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss']
})
export class SqlComponent implements OnInit {
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

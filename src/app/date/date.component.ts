import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  startDateTime: string=null;;
  currentDate: Date;

  constructor() { }

  ngOnInit() {
     this.currentDate = new Date();
  }

  setStartDate() {
    this.startDateTime = new Date().toISOString();
  }
}

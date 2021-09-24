import { Component, OnInit } from '@angular/core';
import { data } from '../files/mongoose'
import { dataQ } from '../files/mongooseQ'

@Component({
  selector: 'app-mongoose',
  templateUrl: './mongoose.component.html',
  styleUrls: ['./mongoose.component.css']
})
export class MongooseComponent implements OnInit {
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
      this.jsData = dataQ;
    }
  }

}

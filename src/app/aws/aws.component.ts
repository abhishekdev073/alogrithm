import { Component, OnInit } from '@angular/core';
import { data } from '../files/aws'
@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = data;
  }
  tabChange(event) {
    if (event.index == 0) {
      this.data = data;
    } else if (event.index == 1) {
      this.data = data;
    }
  }

}

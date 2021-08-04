import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() imageBaseUrl='';
  @Input() data :any;
  constructor() { }
  ngOnInit() {
    console.log(22222222,this.imageBaseUrl);
  }
  

}

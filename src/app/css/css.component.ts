import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  justifyContent='flex-start';
  alignItem ='flex-start';
  alignSelf ='flex-start';
  alignContent ='flex-start';
  wrap ='wrap';
  style :any='';
  style1 :any='';
  style2 :any='';
  style3 :any='';
  constructor() { }

  ngOnInit() {
  }

}

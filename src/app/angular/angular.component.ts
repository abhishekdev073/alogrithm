import { getHtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { data } from '../files/angular'
import { questions } from '../files/angularQuestion'
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  angularData: any = ''
  expandAll = false;
  constructor(private sanitizer: DomSanitizer) {
    this.angularData = data;
  }
  getHtml(val) {
    return this.sanitizer.bypassSecurityTrustScript(val);

  }
  ngOnInit() {

  }
  tabChange(event) {
    if (event.index == 0) {
      this.angularData = data;
    } else if (event.index == 1) {
      this.angularData = questions;
    }
  }

}

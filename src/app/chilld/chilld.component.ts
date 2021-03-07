import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chilld',
  templateUrl: './chilld.component.html',
  styleUrls: ['./chilld.component.css']
})
export class ChilldComponent implements OnInit {
  @Input() name :any;
  constructor() { }

  ngOnInit() {
    console.log('init called child',this.name);
  }
  ngOnChanges(){
    console.log('ngOnChanges called child',this.name);
  }

}

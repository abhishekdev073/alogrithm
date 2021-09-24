import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { HeroService } from '../services/service';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  name = 'abhi'
  isOn = false;
  obsValue: any;
  errorMessage: any;
  asyncValue: any;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  constructor(private httpClient: HttpClient, private service: HeroService, private service1: Service1Service) { }

  ngOnInit() {
    // this.setObsValue('hello1');
    this.getPromise('promise')
  }
  getData() {
    return "component data";
  }
  getServiceData() {
    return this.service.getData();
  }
  getMockServiceData() {
    return this.service1.getData();
  }
  getObservable(name) {
    this.service.getDataObs(name).subscribe(x => {
      this.obsValue = x;
    })
  }
  getObservableOnly(name) {
    this.asyncValue = this.service.getDataObs(name)
  }
  getPromise(name) {
    this.service.getPromiseData(name).then(x => {
      this.obsValue = x;
    })
  }
}

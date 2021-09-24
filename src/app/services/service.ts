import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) { }
  public _observableEmitter: any = {};
  data = [
    {
      id: "1",
      name: "abhi32",
      lastName: "yadav"
    },
    {
      id: "2",
      name: "abhishek",
      lastName: "yadav"
    },
    {
      id: "3",
      name: "Naruto",
      lastName: "yadav"
    }
  ]

  abhi = 'abhishek'
  getData() {
    return "Data from service";
  }
  getValue() {
    return "Data from service";
  }
  getDataObs(name: string = 'abhi'): Observable<any> {
    return new Observable(function (observer) {
    //  setTimeout(() => {
        observer.next(name);
        observer.complete();
      //}, 1000);
    })

  }
  getPromiseData(name: string = 'abhi') {
    return new Promise(function (res,rej) {
      setTimeout(() => {
       res(name)
      }, 1000);
    })

  }
  getHeroes(): Observable<any> {
    return of(this.data);
  }
  getHero(id): Observable<any> {
    return of(this.data.filter(x => x.id == id));
  }

  postData(): Observable<any> {
    return this.http.post("http://localhost:8082/api/addComment",
      {
        "courseListIcon": "...",
        "description": "TEST",
        "iconUrl": "..",
        "longDescription": "...",
        "url": "new-url"
      })
  }
  emitData(key: string, opts: any) {
    if (this._observableEmitter[key]) {
      this._observableEmitter[key].emit(opts);
    }
  }

  apiGetCall() {
    return this.http.get<any>(`./getUser`);
  }
  apiPostCall(name, lastName) {
    return this.http.post<any>(`./saveUser`, { name, lastName });
  }
  postData1() {
    return this.http.post<any[]>(`./posts`, {});
  }
  getEmitter(key: string): any {
    if (key) {
      this._observableEmitter[key] = new EventEmitter();
      return this._observableEmitter[key];
    }
  }
  heatApi() {
    this.http.post("http://localhost:8082/api/addComment",
      {
        "courseListIcon": "...",
        "description": "TEST",
        "iconUrl": "..",
        "longDescription": "...",
        "url": "new-url"
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
  //return this.http.get('http://localhost:8082/api/addComment');

}
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class Service1Service {
  constructor(private http: HttpClient) { }
  public _observableEmitter: any = {};
  data = [
    {
      id: "1",
      name: "Service1Service",
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
    return this.data;
  }
  getHeroes(): Observable<any> {
    return of(this.data);
  }

  getHero(id): Observable<any> {
    return of(this.data.filter(x => x.id == id));
  }

  emitData(key: string, opts: any) {
    if (this._observableEmitter[key]) {
      this._observableEmitter[key].emit(opts);
    }
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By, DomSanitizer } from '@angular/platform-browser';
import { from, of } from 'rxjs';
import { delay, last } from 'rxjs/operators';
import { SafePipe } from '../safe.pipe';
import { HeroService } from '../services/service';
import { Service1Service } from '../services/service1.service';
import { HomeComponent } from './home.component';


var FakeHttpClient = {
  get: function (url, body) {
    if (url.indexOf('./getUser') !== -1) {
      return of("httpClient get user mock")
    }
  },
  post: function (url, body) {
    if (url.indexOf('./saveUser') !== -1) {
      return from([{ msg: "user saved successful", status: 200, success: true, data: body }])
    }
  }
}
class spyServiceObj {
  getData() {
    return "mock service data"
  }
  getDataObs() {
    return of('mock I am from observer')
  }
}
fdescribe('HomeComponent', () => {
  let service: HeroService;
  let mockService: Service1Service;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [
        HeroService,
        { provide: HttpClient, useValue: FakeHttpClient },
        { provide: Service1Service, useClass: spyServiceObj }
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(HeroService);
    mockService = TestBed.get(Service1Service);
    fixture.detectChanges();
    htmlElement = fixture.nativeElement;
  });

  it('component data', fakeAsync(() => {
    expect(component).toBeTruthy();
    expect(component.getData()).toEqual('component data');
  }));
  // htmlElement directly work with browser
  it('#htmlElement', () => {
    const htmlElement1: HTMLElement = fixture.nativeElement;
    expect(htmlElement1.getElementsByTagName('h2')[0].innerText).toBe('Home works');
  })
  // debug element can work without browser
  it('#DebugElement', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const htmlElement1: HTMLElement = debugElement.nativeElement
    expect(htmlElement1.getElementsByTagName('h2')[0].innerText).toBe('Home works');
  })
  it('#event', () => {
    expect(component.isOn).toEqual(false)
    component.clicked()
    expect(component.isOn).toEqual(true)
  })
  it('#detectChanges', () => {
    expect(htmlElement.getElementsByTagName('p')[0].innerText).toBe('off');
    expect(component.isOn).toEqual(false)
    component.clicked()
    expect(component.isOn).toEqual(true)
    expect(htmlElement.getElementsByTagName('p')[0].innerText).not.toEqual('on');
    fixture.detectChanges();
    expect(htmlElement.getElementsByTagName('p')[0].innerText).toEqual('on');
  })
  it('#dispatchEvent', () => {
    const nameInput: HTMLInputElement = htmlElement.querySelector('input');
    const nameDisplay: HTMLElement = htmlElement.querySelector('span');
    expect(nameDisplay.innerText).toEqual('abhi');
    nameInput.value = 'abhishek';
    fixture.detectChanges();
    // it should be abhishek but its not - dispatchEvent
    expect(nameDisplay.innerText).not.toEqual('abhishek');
    nameInput.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    expect(nameDisplay.innerText).toEqual('abhishek');
  })

  // By.css()  => used for selection in DebugElement
  it('#By.css()', () => {
    const debugElement1: DebugElement = fixture.debugElement;
    const h2 = debugElement1.query(By.css('h2'));
    const _html: HTMLElement = h2.nativeElement;
    expect(_html.innerText).toEqual('Home works');
  })
  // to handle async code
  it('#Async and whenStable', async(() => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    spyOn(service, 'getPromiseData').and.returnValue(Promise.resolve('55551'));
    component.getPromise('hi');
    fixture.whenStable().then(x => {//subscribe for observable
      fixture.detectChanges();
      expect(htmlElement.getElementsByTagName('h1')[1].innerText).toBe('55551');
    })
  }));

  it('#fakeAsync', fakeAsync(() => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    spyOn(service, 'getPromiseData').and.returnValue(Promise.resolve('99'));
    component.getPromise('hi');
    tick();
    fixture.detectChanges();
    expect(htmlElement.getElementsByTagName('h1')[0].innerText).toBe('99');
  }))

  it('#done', (done) => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    let spy = spyOn(service, 'getPromiseData').and.returnValue(Promise.resolve('0000'));
    component.getPromise('hi');
    spy.calls.mostRecent().returnValue.then(() => { //subscribe for observable
      fixture.detectChanges();
      expect(htmlElement.getElementsByTagName('h1')[0].innerText).toBe('0000');
      done();
    })
  })

  it('#service data', () => {
    var data = service.getValue();
    expect(data).toEqual('Data from service');
  });
  it('#service mock data', () => {
    var data = mockService.getData()
    expect(data).toEqual("mock service data", "Fail");
  });

  it('#service observable', () => {
    service.getDataObs('I am from observer').subscribe(data => {
      expect(data).toEqual("I am from observer", "Fail");
    })
  });
  it('#mock service observable', () => {
    mockService.getDataObs().subscribe(data => {
      expect(data).toEqual("mock I am from observer", "Fail");
    })
  });

  it('#httpClient get mock', () => {
    service.apiGetCall().subscribe(data => {
      expect(data).toEqual('httpClient get user mock');
    })
  });
  it('#httpClient post mock', () => {
    service.apiPostCall("foo", "bar").subscribe(data => {
      expect(data.success).toEqual(true);
    })
  });
});

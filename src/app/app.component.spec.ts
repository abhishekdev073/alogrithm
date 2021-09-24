import { TestBed, async,tick,fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import 'zone.js/dist/zone-testing';
import { MatIconModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
(window as any)['__zone_symbol__fakeAsyncPatchLock'] = true;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
    let called = false;
    setTimeout(() => { called = true; }, 100);
    tick(100);
    expect(called).toBe(true);

    const start = Date.now();
    tick(10000);
    const end = Date.now();
    expect(end - start).toBe(10000);

  }));

});

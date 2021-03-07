import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilldComponent } from './chilld.component';

describe('ChilldComponent', () => {
  let component: ChilldComponent;
  let fixture: ComponentFixture<ChilldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

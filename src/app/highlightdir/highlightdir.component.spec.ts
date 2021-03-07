import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightdirComponent } from './highlightdir.component';

describe('HighlightdirComponent', () => {
  let component: HighlightdirComponent;
  let fixture: ComponentFixture<HighlightdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

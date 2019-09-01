import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerAccordionComponent } from './viewer-accordion.component';

describe('ViewerAccordionComponent', () => {
  let component: ViewerAccordionComponent;
  let fixture: ComponentFixture<ViewerAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

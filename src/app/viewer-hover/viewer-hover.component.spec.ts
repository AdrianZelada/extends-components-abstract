import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerHoverComponent } from './viewer-hover.component';

describe('ViewerHoverComponent', () => {
  let component: ViewerHoverComponent;
  let fixture: ComponentFixture<ViewerHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

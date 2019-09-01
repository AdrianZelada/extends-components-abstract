import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerPopupComponent } from './viewer-popup.component';

describe('ViewerPopupComponent', () => {
  let component: ViewerPopupComponent;
  let fixture: ComponentFixture<ViewerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

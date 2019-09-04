import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerSecretComponent } from './viewer-secret.component';

describe('ViewerSecretComponent', () => {
  let component: ViewerSecretComponent;
  let fixture: ComponentFixture<ViewerSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

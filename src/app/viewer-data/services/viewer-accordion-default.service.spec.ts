import { TestBed } from '@angular/core/testing';

import { ViewerAccordionDefaultService } from './viewer-accordion-default.service';

describe('ViewerAccordionDefaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewerAccordionDefaultService = TestBed.get(ViewerAccordionDefaultService);
    expect(service).toBeTruthy();
  });
});

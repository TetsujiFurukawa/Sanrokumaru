import { TestBed } from '@angular/core/testing';

import { InformationService } from './information.service';

xdescribe('InformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationService = TestBed.get(InformationService);
    expect(service).toBeTruthy();
  });
});

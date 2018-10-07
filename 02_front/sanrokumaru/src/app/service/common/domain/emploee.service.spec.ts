import { TestBed, inject } from '@angular/core/testing';

import { EmploeeService } from './emploee.service';

describe('EmploeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmploeeService]
    });
  });

  it('should be created', inject([EmploeeService], (service: EmploeeService) => {
    expect(service).toBeTruthy();
  }));
});

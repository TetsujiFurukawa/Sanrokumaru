import { TestBed } from '@angular/core/testing';

import { if1001LoginService } from './if1001-login.service';

describe('if1001LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: if1001LoginService = TestBed.get(if1001LoginService);
    expect(service).toBeTruthy();
  });
});

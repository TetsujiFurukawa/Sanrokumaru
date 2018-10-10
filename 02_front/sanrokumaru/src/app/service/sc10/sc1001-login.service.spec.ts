import { TestBed } from '@angular/core/testing';

import { Sc1001LoginService } from './sc1001-login.service';

describe('Sc1001LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sc1001LoginService = TestBed.get(Sc1001LoginService);
    expect(service).toBeTruthy();
  });
});

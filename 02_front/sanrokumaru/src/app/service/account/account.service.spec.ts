import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('SidenavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});

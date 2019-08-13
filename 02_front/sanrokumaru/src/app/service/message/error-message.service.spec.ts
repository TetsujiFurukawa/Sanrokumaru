import { TestBed } from '@angular/core/testing';

import { ErrorMessageService } from './error-message.service';

xdescribe('ErrorMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorMessageService = TestBed.get(ErrorMessageService);
    expect(service).toBeTruthy();
  });
});

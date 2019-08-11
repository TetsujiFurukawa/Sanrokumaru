import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { HttpClient } from '@angular/common/http';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { TranslateService } from '@ngx-translate/core';

describe('CompanyService', () => {
  //  beforeEach(() => TestBed.configureTestingModule({}));

  let service: CompanyService;

  beforeEach(() => {
    service = new CompanyService(
      new HttpClient(null),
      new ErrorMessageService(),
      new TranslateService(null, null, null, null, null));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

    // const service: CompanyService = TestBed.get(CompanyService);
    // expect(service).toBeTruthy();
  });
});

import { CompanyService } from './company.service';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { SearchCompanyListDto } from 'src/app/entity/company/search-company-list-dto';
import { SearchCompanyDto } from 'src/app/entity/company/search-company-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { asyncError, asyncData } from 'src/app/testing/async-observable-helpers';
import { CompanyDto } from 'src/app/entity/company/company-dto';

describe('CompanyService', () => {
  let companyService: CompanyService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy };
  let translateServiceSpy: { instant: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['instant']);
    companyService = new CompanyService(
      <any>httpClientSpy,
      new ErrorMessageService(),
      <any>translateServiceSpy);
  });

  it('should be created', () => {
    expect(companyService).toBeTruthy();
  });

  it('#getCompanyList:should return expected SearchCompanyListDto (HttpClient called once)', () => {
    const expectedSearchCompanyListDto: SearchCompanyListDto = new SearchCompanyListDto();
    const searchCompanyDto: SearchCompanyDto[] =
      [{
        companySeq: BigInt('1'),
        companyName: 'companyName',
        companyKana: 'companyKana',
        companyAddress1: 'companyAddress1',
        deleted: '',
        createUser: 'createUser',
        createTime: new Date,
        updateUser: 'updateUser',
        updateTime: new Date
      }];
    expectedSearchCompanyListDto.searchCompanyDtos = searchCompanyDto;

    httpClientSpy.get.and.returnValue(asyncData(expectedSearchCompanyListDto));

    companyService.getCompanyList(null).subscribe(
      searchCompanyList => expect(searchCompanyList).toEqual(expectedSearchCompanyListDto, 'expected searchCompanyDto'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('#getCompanyList:when the server returns a 400', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 400 error',
      status: 400, statusText: 'Bad Request'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    companyService.getCompanyList(null).subscribe(
      searchCompanyList => expect(searchCompanyList).toBe(null)
    );
  });

  it('#getCompany:should return expected CompanyDto (HttpClient called once)', () => {
    const expectedCompanyDto: CompanyDto = {
      companySeq: BigInt('1'),
      companyName: 'companyName',
      companyKana: 'companyKana',
      companyPostalCode: 'companyPostalCode',
      companyAddress1: 'companyAddress1',
      companyAddress2: 'companyAddress2',
      companyAddress3: 'companyAddress3',
      companyPhoneNumber: 'companyPhoneNumber',
      personInChargeLastName: 'personInChargeLastName',
      personInChargeFirstName: 'personInChargeFirstName',
      departmentInCharge1: 'departmentInCharge1',
      departmentInCharge2: 'departmentInCharge2',
      departmentInCharge3: 'departmentInCharge3',
      personInChargeEmailAddress: 'personInChargeEmailAddress',
      deleted: false,
      createUser: 'createUser',
      createTime: new Date,
      updateUser: 'updateUser',
      updateTime: new Date
    };

    httpClientSpy.get.and.returnValue(asyncData(expectedCompanyDto));

    companyService.getCompany(null).subscribe(
      companyDto => expect(companyDto).toEqual(expectedCompanyDto, 'expected companyDto'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('#getCompany:when the server returns a 400', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 400 error',
      status: 400, statusText: 'Bad Request'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    companyService.getCompany(null).subscribe(
      companyDto => expect(companyDto).toBe(null)
    );
  });

  it('#createCompany:should return expected CompanyDto (HttpClient called once)', () => {
    const expectedCompanyDto: CompanyDto = {
      companySeq: BigInt('1'),
      companyName: 'companyName',
      companyKana: 'companyKana',
      companyPostalCode: 'companyPostalCode',
      companyAddress1: 'companyAddress1',
      companyAddress2: 'companyAddress2',
      companyAddress3: 'companyAddress3',
      companyPhoneNumber: 'companyPhoneNumber',
      personInChargeLastName: 'personInChargeLastName',
      personInChargeFirstName: 'personInChargeFirstName',
      departmentInCharge1: 'departmentInCharge1',
      departmentInCharge2: 'departmentInCharge2',
      departmentInCharge3: 'departmentInCharge3',
      personInChargeEmailAddress: 'personInChargeEmailAddress',
      deleted: false,
      createUser: 'createUser',
      createTime: new Date,
      updateUser: 'updateUser',
      updateTime: new Date
    };

    httpClientSpy.post.and.returnValue(asyncData(expectedCompanyDto));

    companyService.createCompany(null).subscribe(
      companyDto => expect(companyDto).toEqual(expectedCompanyDto, 'expected companyDto'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('#createCompany:when the server returns a 400', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 400 error',
      status: 400, statusText: 'Bad Request'
    });

    httpClientSpy.post.and.returnValue(asyncError(errorResponse));

    companyService.createCompany(null).subscribe(
      companyDto => expect(companyDto).toBe(null)
    );
  });

  it('#updateCompany:should return expected CompanyDto (HttpClient called once)', () => {
    const expectedCompanyDto: CompanyDto = {
      companySeq: BigInt('1'),
      companyName: 'companyName',
      companyKana: 'companyKana',
      companyPostalCode: 'companyPostalCode',
      companyAddress1: 'companyAddress1',
      companyAddress2: 'companyAddress2',
      companyAddress3: 'companyAddress3',
      companyPhoneNumber: 'companyPhoneNumber',
      personInChargeLastName: 'personInChargeLastName',
      personInChargeFirstName: 'personInChargeFirstName',
      departmentInCharge1: 'departmentInCharge1',
      departmentInCharge2: 'departmentInCharge2',
      departmentInCharge3: 'departmentInCharge3',
      personInChargeEmailAddress: 'personInChargeEmailAddress',
      deleted: false,
      createUser: 'createUser',
      createTime: new Date,
      updateUser: 'updateUser',
      updateTime: new Date
    };

    httpClientSpy.put.and.returnValue(asyncData(expectedCompanyDto));

    companyService.updateCompany(null).subscribe(
      companyDto => expect(companyDto).toEqual(expectedCompanyDto, 'expected companyDto'),
      fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('#updateCompany:when the server returns a 400', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 400 error',
      status: 400, statusText: 'Bad Request'
    });

    httpClientSpy.put.and.returnValue(asyncError(errorResponse));

    companyService.updateCompany(null).subscribe(
      companyDto => expect(companyDto).toBe(null)
    );
  });
});

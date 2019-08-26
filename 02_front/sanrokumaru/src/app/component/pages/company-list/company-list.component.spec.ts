import { HttpLoaderFactory } from 'src/app/app.module';
import { CompanyService } from 'src/app/service/company/company.service';
import { MaterialModule } from 'src/app/utils/material/material.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { CompanyListComponent } from './company-list.component';
import { AppConst } from 'src/app/app-const';
import { throwError, Observable } from 'rxjs';
import { SearchCompanyListDto } from 'src/app/entity/company/search-company-list-dto';
import { SearchCompanyDto } from 'src/app/entity/company/search-company-dto';
import { asyncData } from 'src/app/testing/async-observable-helpers';

describe('CompanyListComponent', () => {
  let component: CompanyListComponent;
  let fixture: ComponentFixture<CompanyListComponent>;

  let routerSpy: { navigate: jasmine.Spy };
  let companyServiceSpy: { getCompanyList: jasmine.Spy };
  let translatePipeSpy: { translate: jasmine.Spy };

  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    companyServiceSpy = jasmine.createSpyObj('CompanyService', ['getCompanyList']);
    translatePipeSpy = jasmine.createSpyObj('TranslatePipe', ['translate']);


    TestBed.configureTestingModule({
      declarations: [CompanyListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MaterialModule, HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        FormBuilder,
        Title,
        { provide: Router, useValue: routerSpy },
        { provide: CompanyService, useValue: companyServiceSpy },
        { provide: TranslatePipe, useValue: translatePipeSpy },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('locale and timezone should be set when called ngOnInit', () => {
    component.ngOnInit();
    expect(component.locale).toEqual(AppConst.LOCALE);
    expect(component.timezone).toEqual(AppConst.TIMEZONE);
  });

  it('locale and timezone should be set when called setUpLocale', () => {
    component['setUpLocale']();
    expect(component.locale).toEqual(AppConst.LOCALE);
    expect(component.timezone).toEqual(AppConst.TIMEZONE);
  });

  // it('browser title should be set when called setUpBrowserTitle', () => {
  //   component['setUpBrowserTitle']();
  //   expect(component.locale).toEqual(AppConst.LOCALE);
  // });

  it('should navigate when called onNew', () => {
    component['onNew']();
    expect(routerSpy.navigate.calls.count()).toBe(1, 'one call');
  });

  it('should navigate when called onClear', () => {
    fillSearchCriteria(component);
    component['onClear']();
    expect(component.companyName.value).toEqual('');
    expect(component.companyKana.value).toEqual('');
    expect(component.deleted.value).toEqual('');
  });

  it('should get SearchCompanyListDto when called onSearch', () => {
    component['onSearch']();
    expect(component.isLoadingResults).toEqual(false);
    expect(companyServiceSpy.getCompanyList.calls.count()).toBe(1, 'one call');
  });

  it('should catch error when called onSearch', () => {
    component['onSearch']();
    companyServiceSpy.getCompanyList.and.returnValue(throwError(''));
    expect(component.isLoadingResults).toEqual(false);
  });

  // it('should get SearchCompanyListDto when called onSearch', () => {
  //   const expectedSearchCompanyListDto: SearchCompanyListDto = new SearchCompanyListDto();
  //   const searchCompanyDto: SearchCompanyDto[] =
  //     [{
  //       companySeq: BigInt('1'),
  //       companyName: 'companyName',
  //       companyKana: 'companyKana',
  //       companyAddress1: 'companyAddress1',
  //       deleted: '',
  //       createUser: 'createUser',
  //       createTime: new Date,
  //       updateUser: 'updateUser',
  //       updateTime: new Date
  //     }];
  //   expectedSearchCompanyListDto.searchCompanyDtos = searchCompanyDto;

  //   companyServiceSpy.getCompanyList.and.returnValue(new Observable());

  //   companyServiceSpy.getCompanyList(null).subscribe(
  //     expect(component.searchCompanyDtos).toEqual(expectedSearchCompanyListDto.searchCompanyDtos)
  //   );

  //   component['onSearch']();
  //   expect(component.isLoadingResults).toEqual(false);
  //   expect(companyServiceSpy.getCompanyList.calls.count()).toBe(1, 'one call');
  // });

});
function fillSearchCriteria(component: CompanyListComponent) {
  component.companyName.setValue('a');
  component.companyKana.setValue('a');
  component.deleted.setValue(true);
}


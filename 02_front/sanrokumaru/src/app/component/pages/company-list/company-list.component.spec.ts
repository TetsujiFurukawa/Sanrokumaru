import { HttpLoaderFactory } from 'src/app/app.module';
import { CompanyService } from 'src/app/service/company/company.service';
import { MaterialModule } from 'src/app/utils/material/material.module';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Title, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { CompanyListComponent } from './company-list.component';
import { AppConst } from 'src/app/app-const';
import { throwError } from 'rxjs';
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

  /**
   * Type Script test cases.
   */
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
    expect(component.deleted.value).toEqual(false);
  });

  it('should get SearchCompanyListDto when called onSearch', async () => {
    await component['onSearch']();
    expect(component.isLoadingResults).toEqual(false);
    expect(companyServiceSpy.getCompanyList.calls.count()).toBe(1, 'one call');
  });

  it('should catch error when called onSearch', async () => {
    await component['onSearch']();
    companyServiceSpy.getCompanyList.and.returnValue(throwError(''));
    expect(component.isLoadingResults).toEqual(false);
  });

  it('should call map operator when called onSearch', async () => {
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
    companyServiceSpy.getCompanyList.and.returnValue(asyncData(expectedSearchCompanyListDto));

    await component['onSearch']();
    expect(component.searchCompanyDtos).toEqual(expectedSearchCompanyListDto.searchCompanyDtos);
    expect(component.isLoadingResults).toEqual(false);
    expect(companyServiceSpy.getCompanyList.calls.count()).toBe(1, 'one call');
  });

  it('should navigate when called listClicked', () => {
    const searchCompanyDto: SearchCompanyDto = new SearchCompanyDto();
    searchCompanyDto.companySeq = BigInt('1');
    component['listClicked'](searchCompanyDto);
    expect(routerSpy.navigate.calls.count()).toBe(1, 'one call');
  });

  /**
   * DOM test cases.
   */
  it('should set company name with searchCondition1', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const queriedElement = debugElement.query(By.css('#searchCondition1'));
    const htmlElement: HTMLElement = queriedElement.nativeElement;
    expect(htmlElement.textContent).toContain('companyListScreen.companyName');
  });

  it('should set company kana with searchCondition2', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const queriedElement = debugElement.query(By.css('#searchCondition2'));
    const htmlElement: HTMLElement = queriedElement.nativeElement;
    expect(htmlElement.textContent).toContain('companyListScreen.companyKana');
  });

  it('should set deleted with searchCondition3', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const queriedElement = debugElement.query(By.css('#searchCondition3'));
    const htmlElement: HTMLElement = queriedElement.nativeElement;
    expect(htmlElement.textContent).toContain('companyListScreen.deleted');
  });

  it('verify initial value of searchConditions', () => {
    const debugElement: DebugElement = fixture.debugElement;
    let queriedElement = debugElement.query(By.css('#companyName'));
    let htmlInputElement: HTMLInputElement = queriedElement.nativeElement;
    expect(htmlInputElement.textContent).toEqual('');

    queriedElement = debugElement.query(By.css('#companyKana'));
    htmlInputElement = queriedElement.nativeElement;
    expect(htmlInputElement.textContent).toEqual('');

    queriedElement = debugElement.query(By.css('.mat-checkbox-inner-container'));
    htmlInputElement = queriedElement.nativeElement;
    expect(htmlInputElement.checked).toBeUndefined();
  });

  it('should entry company name', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const queriedElement = debugElement.query(By.css('#companyName'));
    const htmlInputElement: HTMLInputElement = queriedElement.nativeElement;
    const expectedEntry = 'abcd1234日本語';

    htmlInputElement.value = expectedEntry;
    htmlInputElement.dispatchEvent(new Event('input'));
    expect(component.companyName.value).toEqual(expectedEntry);
  });

  it('should entry company kana', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const queriedElement = debugElement.query(By.css('#companyKana'));
    const htmlInputElement: HTMLInputElement = queriedElement.nativeElement;
    const expectedEntry = 'アイウエオカキクケコ';

    htmlInputElement.value = expectedEntry;
    htmlInputElement.dispatchEvent(new Event('input'));
    expect(component.companyKana.value).toEqual(expectedEntry);
  });

  /** The material check box is different from normal. */
  it('should entry deleted', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const queriedElement = debugElement.query(By.css('.mat-checkbox-inner-container'));
    const htmlInputElement: HTMLInputElement = queriedElement.nativeElement;

    htmlInputElement.click();
    fixture.detectChanges();
    expect(component.mainForm.value.deleted).toBe(true);

  });

  it('should create http param', () => {
    const debugElement: DebugElement = fixture.debugElement;

    let queriedElement = debugElement.query(By.css('#companyName'));
    const htmlInputElement: HTMLInputElement = queriedElement.nativeElement;
    const expectedEntry = 'abcd1234日本語';
    htmlInputElement.value = expectedEntry;
    htmlInputElement.dispatchEvent(new Event('input'));

    queriedElement = debugElement.query(By.css('#companyKana'));
    const htmlInputElementKana: HTMLInputElement = queriedElement.nativeElement;
    const expectedEntryKana = 'アイウエオカキクケコ';
    htmlInputElementKana.value = expectedEntryKana;
    htmlInputElementKana.dispatchEvent(new Event('input'));

    queriedElement = debugElement.query(By.css('.mat-checkbox-inner-container'));
    const htmlInputElementDeleted: HTMLInputElement = queriedElement.nativeElement;
    htmlInputElementDeleted.click();
    fixture.detectChanges();

    const conditions = {
      companyName: expectedEntry,
      companyKana: expectedEntryKana,
      deleted: 'true',
      pageSize: '50',
      pageIndex: '0',
    };
    const paramsOptions = <any>{ fromObject: conditions };
    const expectedHttpParams = new HttpParams(paramsOptions);

    expect(component['createHttpParams']()).toEqual(expectedHttpParams);
  });

});
function fillSearchCriteria(component: CompanyListComponent) {
  component.companyName.setValue('a');
  component.companyKana.setValue('a');
  component.deleted.setValue(true);
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListComponent } from './company-list.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from 'src/app/service/company/company.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService, TranslatePipe, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/utils/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
});

import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company/company.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchCompanyDto } from 'src/app/entity/company/search-company-dto';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppConst } from 'src/app/app-const';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  // These are the search condition settings.
  public companySeq: number;
  public companyName = new FormControl('', [Validators.required]);
  public companyKana = new FormControl('', [Validators.required]);
  public companyPostalCode = new FormControl('', [Validators.required]);
  public companyAddress1 = new FormControl('', [Validators.required]);
  public companyAddress2 = new FormControl('', [Validators.required]);
  public companyAddress3 = new FormControl('', []);
  public companyPhoneNumber = new FormControl('', []);
  public personInChargeFirstName = new FormControl('', []);
  public personInChargeLastName = new FormControl('', []);
  public departmentInCharge1 = new FormControl('', []);
  public departmentInCharge2 = new FormControl('', []);
  public departmentInCharge3 = new FormControl('', []);
  public personInChargeEmailAddress = new FormControl('', [Validators.email]);
  public deleted = new FormControl('', []);
  public deletedDay = new FormControl('', []);

  public mainForm = this.formBuilder.group({
    companyName: this.companyName,
    companyKana: this.companyKana,
    companyPostalCode: this.companyPostalCode,
    companyAddress1: this.companyAddress1,
    companyAddress2: this.companyAddress2,
    companyAddress3: this.companyAddress3,
    companyPhoneNumber: this.companyPhoneNumber,
    personInChargeFirstName: this.personInChargeFirstName,
    personInChargeLastName: this.personInChargeLastName,
    departmentInCharge1: this.departmentInCharge1,
    departmentInCharge2: this.departmentInCharge2,
    departmentInCharge3: this.departmentInCharge3,
    personInChargeEmailAddress: this.personInChargeEmailAddress,
    deleted: this.deleted,
    deletedDay: this.deletedDay
  });

  public searchCompanyDtos: SearchCompanyDto[];

  public resultsLength = 0;
  public isLoadingResults = false;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.setUpBrowserTitle();
  }
  private setUpBrowserTitle() {
    this.title.setTitle(AppConst.APP_TITLE + AppConst.APP_SUB_TITLE_COMPANY_Detail);
  }

  private onBack() {
    this.router.navigate(['/company-list']);
  }

  private onUpdate() {
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.companyService.getCompanyList(this.createHttpParams());
        }),

        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.resultsLength;
          return data.searchCompanyDtos;
        }),

        catchError(() => {
          this.isLoadingResults = false;
          return of(null as any);
        })

      ).subscribe(data => this.searchCompanyDtos = data);
  }

  private createHttpParams(): HttpParams {
    const conditions = {
      companyName: this.companyName.value,
      companyKana: this.companyKana.value,
      deleted: this.deleted.value,

    };

    const paramsOptions = <any>{ fromObject: conditions };
    const params = new HttpParams(paramsOptions);

    return params;
  }

}

import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SearchCompanyDto } from 'src/app/entity/company/search-company-dto';
import { CompanyService } from 'src/app/service/company/company.service';

import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { AppConst } from 'src/app/app-const';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  // These are the search condition settings.
  public companyName = new FormControl('', []);
  public companyKana = new FormControl('', []);
  public deleted = new FormControl('', []);

  public mainForm = this.formBuilder.group({
    companyName: this.companyName,
    companyKana: this.companyKana,
    deleted: this.deleted
  });

  public searchCompanyDtos: SearchCompanyDto[];
  public displayCompanyListColumns: string[] = [
    'companySeq',
    'companyName',
    'companyKana',
    'companyAddress1',
    'deleted',
    'createUser',
    'createTime',
    'updateUser',
    'updateTime',
  ];

  public resultsLength = 0;
  public isLoadingResults = false;

  // timezone & locale
  public locale: string;
  public timezone: string;

  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.setUpLocale();
    this.setUpBrowserTitle();
  }

  private setUpLocale() {
    this.locale = AppConst.LOCALE;
    this.timezone = AppConst.TIMEZONE;
  }

  private setUpBrowserTitle() {
    this.title.setTitle(AppConst.APP_TITLE + AppConst.APP_SUB_TITLE_COMPANY_LIST);
  }

  private onNew() {
    this.router.navigate(['/company-detail/new']);
  }

  private onClear() {
    this.clearSearchCondition();
    this.clearSearchResultList();
  }

  private onSearch() {
    merge(this.paginator.page)
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
          this.paginator.pageIndex = data.pageIndex;
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

      pageSize: this.paginator.pageSize.toString(),
      pageIndex: this.paginator.pageIndex.toString()
    };

    const paramsOptions = <any>{ fromObject: conditions };
    const params = new HttpParams(paramsOptions);

    return params;
  }

  private clearSearchCondition() {
    this.companyName.setValue('');
    this.companyKana.setValue('');
    this.deleted.setValue('');
  }

  private clearSearchResultList() {
    this.searchCompanyDtos = null;
    this.resultsLength = 0;
  }
  private listClicked(searchCompanyDto: SearchCompanyDto) {
    this.router.navigate(['/company-detail', searchCompanyDto.companySeq]);
  }

}

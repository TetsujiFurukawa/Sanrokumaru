import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import { SearchCompanyDto } from 'src/app/entity/company/search-company-dto';
import { CompanyService } from 'src/app/service/company/company.service';

import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  // Timezone and Locale
  locale: string;
  timezone: string;

  // Search criteria controls
  companyName = new FormControl('', []);
  companyKana = new FormControl('', []);
  deleted = new FormControl('', []);

  // Form builder
  mainForm = this.formBuilder.group({
    companyName: this.companyName,
    companyKana: this.companyKana,
    deleted: this.deleted
  });

  // Search related variables
  searchCompanyDtos: SearchCompanyDto[];
  displayCompanyListColumns: string[] = [
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

  resultsLength = 0;
  isLoadingResults = false;
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

  /**
   * Sets the locale from appConst.
   */
  private setUpLocale() {
    this.locale = AppConst.LOCALE;
    this.timezone = AppConst.TIMEZONE;
  }

  /**
   * Sets screen title.
   */
  private setUpBrowserTitle() {
    this.title.setTitle(AppConst.APP_TITLE + AppConst.APP_SUB_TITLE_COMPANY_LIST);
  }

  /**
   * Clicks the new registration button.
   */
  private onNew() {
    this.router.navigate(['/company-detail/new']);
  }

  /**
   * Click the clear button.
   */
  private onClear() {
    this.clearSearchCondition();
    this.clearSearchResultList();
  }

  /**
   * Searches for customer informations.
   */
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

  /**
   * Creates search criterias.
   */
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

  /**
   * Clears search criteria controls.
   */
  private clearSearchCondition() {
    this.companyName.setValue('');
    this.companyKana.setValue('');
    this.deleted.setValue('');
  }

  /**
   * Clears search result list.
   */
  private clearSearchResultList() {
    this.searchCompanyDtos = null;
    this.resultsLength = 0;
  }

  /**
   * Clicks search result.
   * @param searchCompanyDto cliked company entity.
   */
  private listClicked(searchCompanyDto: SearchCompanyDto) {
    this.router.navigate(['/company-detail', searchCompanyDto.companySeq]);
  }

}

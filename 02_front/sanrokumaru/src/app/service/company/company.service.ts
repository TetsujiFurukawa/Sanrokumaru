import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import { SearchCompanyListDto } from 'src/app/entity/company/search-company-list-dto';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CompanyDto } from 'src/app/entity/company/company-dto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  public getCompanyList(httpParams: HttpParams): Observable<SearchCompanyListDto> {
    const webApiUrl: String = 'company-list';
    return this.http.get<SearchCompanyListDto>(this.server + webApiUrl, { params: httpParams })
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );

  }

  public getCompany(companySeq: number): Observable<CompanyDto> {
    const webApiUrl: String = `company/?companySeq=${companySeq}`;

    return this.http.get<CompanyDto>(this.server + webApiUrl, {
      params: {
        companySeq: `${companySeq}`
      }
    }
    )
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );
  }

  public createCompany(companyDto: CompanyDto): Observable<CompanyDto> {
    const webApiUrl: String = 'company';

    return this.http.post<CompanyDto>(this.server + webApiUrl, companyDto)
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );

  }

  public updateCompany(companyDto: CompanyDto): Observable<CompanyDto> {
    const webApiUrl: String = 'company';

    return this.http.put<CompanyDto>(this.server + webApiUrl, companyDto)
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );

  }

}

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import { SearchCompanyListDto } from 'src/app/entity/company/search-company-list-dto';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'company-list';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  public getCompanyList(httpParams: HttpParams): Observable<SearchCompanyListDto> {

    return this.http.get<SearchCompanyListDto>(this.server + this.webApiUrl, { params: httpParams })
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );

  }

}

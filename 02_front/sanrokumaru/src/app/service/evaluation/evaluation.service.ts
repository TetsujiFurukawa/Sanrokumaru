import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import {
  SearchEvaluationResultListDto
} from 'src/app/entity/evaluation/search-evaluation-result-list-dto';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'evaluation-result-list';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  public getEvaluationResult(httpParams: HttpParams): Observable<SearchEvaluationResultListDto> {

    return this.http.get<SearchEvaluationResultListDto>(this.server + this.webApiUrl, { params: httpParams })
      .pipe(
        catchError(error => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );

  }

}

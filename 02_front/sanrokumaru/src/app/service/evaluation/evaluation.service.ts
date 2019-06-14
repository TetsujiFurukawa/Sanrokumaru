import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import {
  SearchEvaluattionResultListDto
} from 'src/app/entity/evaluation/search-evaluattion-result-list-dto';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'evaluationResult';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  public getEvaluationResult(): Observable<SearchEvaluattionResultListDto> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<SearchEvaluattionResultListDto>(this.server + this.webApiUrl, AppConst.httpOptions)
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of(null as any);
        })
      );
  }

}

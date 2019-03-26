import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Information } from 'src/app/entity/domain/information';
import { environment } from '../../../environments/environment';
import { AppConst } from '../../app-const';

import { HttpClient } from '@angular/common/http';
import { ErrorMessageService } from '../common/message/error-message.service';
import { catchError, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'informations';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  getInformations(): Observable<Information[]> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<Information[]>(this.server + this.webApiUrl, AppConst.httpOptions)
      .pipe(tap(),
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          console.log(err);
          return of([]);
        })
      );
  }
}

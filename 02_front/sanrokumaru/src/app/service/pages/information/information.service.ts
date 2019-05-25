import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AppConst } from 'src/app/app-const';

import { Information } from 'src/app/entity/information/information';


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

  public getInformations(): Observable<Information[]> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<Information[]>(this.server + this.webApiUrl, AppConst.httpOptions)
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          console.log(err);
          return of([]);
        })
      );
  }
}

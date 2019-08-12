import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import { Information } from 'src/app/entity/information/information';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'information-list';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  public getInformations(): Observable<Information[]> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<Information[]>(this.server + this.webApiUrl,
      {
        headers: new HttpHeaders().set('Content-Type', AppConst.HTTP_CONTENT_TYPE),
        withCredentials: AppConst.HTTP_WITH_CREDENTIALS
      }

    )
      .pipe(
        catchError(error => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of([]);
        })
      );
  }
}

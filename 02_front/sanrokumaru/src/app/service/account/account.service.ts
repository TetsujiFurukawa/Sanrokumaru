import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConst } from 'src/app/app-const';
import { AvailableMenuListDto } from 'src/app/entity/account/available-menu-list-dto';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'availableMenu';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService

  ) { }

  getAvailableMenu(): Observable<AvailableMenuListDto[]> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<AvailableMenuListDto[]>(this.server + this.webApiUrl,
      {
        headers: new HttpHeaders().set('Content-Type', AppConst.HTTP_CONTENT_TYPE),
        withCredentials: AppConst.HTTP_WITH_CREDENTIALS
      }

    )
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          return of([]);
        })
      );
  }
}

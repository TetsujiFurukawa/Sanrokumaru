import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppConst } from '../../../app-const';
import { environment } from '../../../../environments/environment';
import { ErrorMessageService } from '../message/error-message.service';

import { AvailableMenuListDto } from 'src/app/entity/dto/available-menu-list-dto';

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

    return this.http.get<AvailableMenuListDto[]>(this.server + this.webApiUrl, AppConst.httpOptions)
      .pipe(
        catchError(err => {
          this.errorMessageService.add(this.translateService.instant('errMessage.http'));
          console.log(err);
          return of([]);
        })
      );
  }
}

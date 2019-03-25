import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Information } from 'src/app/entity/domain/information';
import { environment } from '../../../environments/environment';
import { AppConst } from '../../app-const';

import { HttpClient } from '@angular/common/http';
import { ErrorMessageService } from '../common/message/error-message.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'informations';

  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService
  ) { }

  getInformations(): Observable<Information[]> {

    console.log(this.server + this.webApiUrl);

    return this.http.get<Information[]>(this.server + this.webApiUrl, AppConst.httpOptions)
      .pipe(tap(),
        catchError(this.handleError<any>('updateHero'))
      );

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.errorMessageService.add('サーバとの通信に失敗しました。');

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

}

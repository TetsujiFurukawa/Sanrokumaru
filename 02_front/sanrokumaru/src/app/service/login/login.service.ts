import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Information } from '../../entity/domain/information';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConst } from '../../app-const';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // ヘッダ
  private headers: any = new Headers({ 'Content-Type': 'application/json' });

  private serverUrl = 'api/login';  // Web APIのURL

  // お知らせ
  private informations: Information[];

  // コンストラクタ
  constructor(private http: HttpClient) { }

  /**
   * お知らせを取得する
   */
  getInformations(body: any): Observable<Information[]> {
    // サーバ URL
    // const serverUrl = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_STG_SERVER;
    // const path = AppConst + 'if1001';

    return this.http.get<Information[]>(this.serverUrl)
      .pipe(
        catchError(this.handleError('getInformations', []))
      );
  }
  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  /** HeroServiceのメッセージをMessageServiceを使って記録 */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}

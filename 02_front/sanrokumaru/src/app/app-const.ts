import { HttpHeaders } from '@angular/common/http';

export class AppConst {

  // サーバーURL
  static readonly URL_PROD_SERVER = 'http://localhost/api/';
  static readonly URL_DEV_SERVER = 'http://localhost:8080/api/';

  // ユーザ権限
  static readonly ROLE_USER = 'ROLE_USER';
  static readonly ROLE_ADMIN = 'ROLE_ADMIN';

  // httpオプション（プレフライトリクエスト）
  static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: false
  };

}

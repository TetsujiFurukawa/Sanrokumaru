import { HttpHeaders } from '@angular/common/http';

export class AppConst {

  // web server url
  static readonly URL_PROD_SERVER = 'http://localhost/api/';
  static readonly URL_DEV_SERVER = 'http://localhost:8080/api/';

  // user permission
  static readonly ROLE_USER = 'ROLE_USER';
  static readonly ROLE_ADMIN = 'ROLE_ADMIN';

  // http related
  static readonly HTTP_CONTENT_TYPE = 'application/json';
  static readonly HTTP_WITH_CREDENTIALS = false;

  // default lang
  static readonly LANG = 'ja-JP';

}

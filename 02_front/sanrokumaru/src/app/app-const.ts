import { HttpHeaders } from '@angular/common/http';

export class AppConst {

  static readonly APP_TITLE = '360 | ';
  static readonly APP_SUB_TITLE_SIGN_IN = 'Sign In';
  static readonly APP_SUB_TITLE_EVALUATION_RESULT = 'Evaluation Result';
  static readonly APP_SUB_TITLE_COMPANY_LIST = 'Company List';
  static readonly APP_SUB_TITLE_COMPANY_Detail = 'Company Detail';

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
  static readonly LOCALE = 'ja-JP';

  // default timezone
  static readonly TIMEZONE = 'UTC/Asia/Tokyo';

  // These are the evaluation target option settings.
  static readonly evaluationTargetOption = [
    { label: 'evaluationResultScreen.evaluationTargetOptions.noOption', value: '0' },
    { label: 'evaluationResultScreen.evaluationTargetOptions.targetPersonOnly', value: '1' },
    { label: 'evaluationResultScreen.evaluationTargetOptions.notevaluated', value: '2' }
  ];

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConst } from 'src/app/app-const';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Information } from 'src/app/entity/information/information';
import { SignInDto } from 'src/app/entity/signIn/sign-in-dto';
import { Session } from 'src/app/service/session/session';
import { ErrorMessageService } from 'src/app/service/message/error-message.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private server = environment.production ? AppConst.URL_PROD_SERVER : AppConst.URL_DEV_SERVER;
  private webApiUrl = 'signin';
  private session: Session;
  constructor(
    private http: HttpClient,
    private errorMessageService: ErrorMessageService,
    private readonly translateService: TranslateService
  ) { }

  signIn(signInDto: SignInDto): Observable<Session> {

    return this.http.get<Session>(this.server + this.webApiUrl, AppConst.httpOptions
      // map(res => this.session)
    );
  }
}

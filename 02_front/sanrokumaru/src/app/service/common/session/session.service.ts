import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Session } from './session';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public session = new Session();
  public sessionSubject = new Subject<Session>();
  public sessionState = this.sessionSubject.asObservable();

  constructor(
    private router: Router
  ) { }

  public login(): void { // 追加
    this.session.login = true;
    this.sessionSubject.next(this.session);
    this.router.navigate(['/evaluation-result']);
  }

  logout(): void { // 追加
    this.sessionSubject.next(this.session.reset());
    this.router.navigate(['/signIn']);
  }


}

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

  public login(session: Session): void { // 追加
    this.setUpSession(session);
    this.sessionSubject.next(this.session);
    this.router.navigate(['/evaluation-result']);
  }

  public logout(): void {
    this.sessionSubject.next(this.session.reset());
    this.router.navigate(['/signIn']);
  }

  private setUpSession(session: Session) {
    this.session.login = session.login;
    this.session.adimn = session.adimn;
    this.session.userId = session.userId;
    this.session.firstName = session.firstName;
    this.session.lastName = session.lastName;
  }

}

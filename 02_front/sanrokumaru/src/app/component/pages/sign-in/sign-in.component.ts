import { Information } from 'src/app/entity/information/information';
import { SignInDto } from 'src/app/entity/signIn/sign-in-dto';
import { InformationService } from 'src/app/service/information/information.service';
import { Session } from 'src/app/service/session/session';
import { SessionService } from 'src/app/service/session/session.service';
import { SignInService } from 'src/app/service/signIn/sign-in.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // 通信エラー時のメッセージ
  errMessage: string;

  // E-Mailアドレス
  signInEMailAddress = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  // パスワード
  signInPassword = new FormControl('', [
    Validators.required
  ]);

  // サインインのフォーム設定
  signInForm = this.formBuilder.group({
    signInEMailAddress: this.signInEMailAddress,
    signInPassword: this.signInPassword
  });

  // お知らせ欄の変数
  informations: Information[];
  displayInformationColumns: string[] = ['date', 'information', 'detail'];

  // サインイン用のDTO
  signInDto = new SignInDto;

  public session = new Session();

  constructor(
    private formBuilder: FormBuilder,
    private infomationService: InformationService,
    private signInService: SignInService,
    private sessionService: SessionService,
    private router: Router

  ) { }

  ngOnInit() {
    this.getInformations();

  }

  /**
   * 最新インフォメーションを取得する
   */
  private getInformations(): void {
    this.infomationService.getInformations().subscribe(informations => this.informations = informations);

  }

  onSubmit() {
    this.signInDto = this.createSignInDto();
    this.signInService.signIn(this.signInDto).subscribe(session => this.session = session);
    console.log(this.session);

    if (this.session.login) {
      this.sessionService.login(this.session);
    }

  }

  private createSignInDto(): SignInDto {
    this.signInDto.signInEMailAddress = this.signInEMailAddress.value;
    this.signInDto.signInPassword = this.signInPassword.value;

    return this.signInDto;
  }
}

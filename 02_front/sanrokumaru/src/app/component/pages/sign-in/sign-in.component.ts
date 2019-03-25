import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Information } from '../../../entity/domain/information';
import { InformationService } from '../../../service/information/information.service';
import { ErrorMessageService } from '../../../service/common/message/error-message.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // 通信エラー時のメッセージ
  errMessage: string;

  // ユーザID
  signInUserId = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  // パスワード
  signInPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  // サインインのフォーム設定
  signInForm = this.formBuilder.group({
    signInUserId: this.signInUserId,
    signInPassword: this.signInPassword
  });

  // お知らせ欄の変数
  informations: Information[];

  constructor(
    private formBuilder: FormBuilder,
    private infomationService: InformationService,
    private errMessageService: ErrorMessageService
  ) { }

  ngOnInit() {
    this.getInformations();
    this.errMessageService.add('init');
  }

  /**
   * 最新インフォメーションを取得する
   */
  private getInformations(): void {
    this.infomationService.getInformations().subscribe(Informations => this.informations = Informations);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }

}

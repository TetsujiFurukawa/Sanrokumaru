import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Information } from '../../../entity/domain/information';
import { InformationService } from '../../../service/information/information.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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

  // サインインのバリデーショングループ
  signInForm = this.formBuilder.group({
    signInUserId: this.signInUserId,
    signInPassword: this.signInPassword
  });

  // お知らせ欄
  informations: Information[];

  constructor(
    private formBuilder: FormBuilder,
    private infomationService: InformationService
  ) { }

  ngOnInit() {
    // 最新インフォメーションを取得取得する
    this.getInformations();
  }

  /**
   * 最新インフォメーションを取得します
   */
  private getInformations(): void {
    this.infomationService.getInformations().subscribe(Informations => this.informations = Informations);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Information } from '../../entity/information';

@Component({
  selector: 'app-screen0001-login',
  templateUrl: './screen0001-login.component.html',
  styleUrls: ['./screen0001-login.component.css']
})
export class Screen0001LoginComponent implements OnInit {

  constructor() { }

  // ログインID
  loginId: String;

  // ログインパスワード
  loginPassword: String;

  // お知らせ
  informations: Information[];

  ngOnInit() {
    this.setUpInformations();

  }

  // Informationsの初期化
  private setUpInformations() {
    this.informations = [
      { date: '2018/8/1', information: '運用停止のお知らせ。' },
      { date: '2018/2/1', information: '運用開始' },
    ];
  }
}

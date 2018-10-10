import { Component, OnInit } from '@angular/core';
import { Information } from '../../../entity/domain/information';

@Component({
  selector: 'app-sc1001-login',
  templateUrl: './sc1001-login.component.html',
  styleUrls: ['./sc1001-login.component.css']
})
export class Sc1001LoginComponent implements OnInit {

  constructor() { }

  // ログインID
  loginId: String;

  // ログインパスワード
  loginPassword: String;

  // お知らせ
  informations: Information[];

  ngOnInit() {
    // インフォメーションの初期化
    this.setUpInformations();
  }

  // Informationsの初期化
  private setUpInformations() {
    this.informations = [
      { date: '2018/8/1', information: '運用停止のお知らせ', detail: 'メンテナンスのため月末の0:00～2:00まで運用を停止します。' },
      { date: '2018/2/1', information: '運用開始', detail: '運用を開始します。' },
    ];
  }
}

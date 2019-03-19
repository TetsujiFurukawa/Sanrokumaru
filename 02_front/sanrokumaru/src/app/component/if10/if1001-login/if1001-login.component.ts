import { Component, OnInit } from '@angular/core';
import { Information } from '../../../entity/domain/information';
import { InformationService } from '../../../service/information/information.service';

@Component({
  selector: 'app-if1001-login',
  templateUrl: './if1001-login.component.html',
  styleUrls: ['./if1001-login.component.css']
})
export class If1001LoginComponent implements OnInit {

  constructor(private infomationService: InformationService) { }

  // ログインID
  loginId: String;

  // ログインパスワード
  loginPassword: String;

  // お知らせ
  informations: Information[];

  ngOnInit() {
    // 最新インフォメーションを取得取得する
    this.getInformations();
  }

  /**
   * 最新インフォメーションを取得します
   */
  getInformations(): void {
    this.infomationService.getInformations().subscribe(Informations => this.informations = Informations);
  }

}

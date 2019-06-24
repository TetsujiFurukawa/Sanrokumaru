import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanrokumaru';

  constructor(
    private translate: TranslateService,
    // private dateAdapter: DateAdapter<any>,
    // private momentDateAdapter: MomentDateAdapter,
    public router: Router
  ) {
    // 言語の初期設定
    this.translate.setDefaultLang('en');
    this.translate.use('ja');
    // this.dateAdapter.setLocale('ja-JP');
  }

}

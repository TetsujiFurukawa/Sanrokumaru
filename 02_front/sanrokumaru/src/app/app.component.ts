import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanrokumaru';
  events: string[] = [];
  opened: boolean;

  constructor(
    translate: TranslateService,
    public router: Router
  ) {
    // 言語の初期設定
    translate.setDefaultLang('en');
    translate.use('ja');
  }

}

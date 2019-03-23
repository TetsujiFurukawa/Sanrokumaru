import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanrokumaru';

  constructor(translate: TranslateService) {
    // 言語の初期設定
    translate.setDefaultLang('en');
    translate.use('ja');
  }

}

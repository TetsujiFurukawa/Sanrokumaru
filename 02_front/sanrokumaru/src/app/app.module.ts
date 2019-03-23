// 機能に関するモジュール類
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// コンポーネント関連
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

import { SignInComponent } from './component/pages/sign-in/sign-in.component';
import { EvaluationResultComponent } from './component/pages/evaluation-result/evaluation-result.component';
import { SearchInfoComponent } from './component/common/search-info/search-info.component';
import { MessagesComponent } from './component/common/message/messages/messages.component';
import { ErrorMessagesComponent } from './component/common/message/error-messages/error-messages.component';

// 他言語化の設定
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// モジュール定義
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    EvaluationResultComponent,
    SearchInfoComponent,
    MessagesComponent,
    ErrorMessagesComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    FormsModule, AppRoutingModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

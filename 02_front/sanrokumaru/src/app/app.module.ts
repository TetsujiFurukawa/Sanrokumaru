// 機能に関するモジュール類
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// コンポーネント関連
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

import { LoginComponent } from './component/pages/login/login.component';
import { EvaluationResultComponent } from './component/pages/evaluation-result/evaluation-result.component';
import { SearchInfoComponent } from './component/common/search-info/search-info.component';
import { MessagesComponent } from './component/common/message/messages/messages.component';
import { ErrorMessagesComponent } from './component/common/message/error-messages/error-messages.component';

// サービス関連

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    EvaluationResultComponent,
    SearchInfoComponent,
    MessagesComponent,
    ErrorMessagesComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

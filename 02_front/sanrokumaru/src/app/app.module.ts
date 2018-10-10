// 機能に関するモジュール類
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// コンポーネント関連
import { AppComponent } from './component/common/app/app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

import { Sc1001LoginComponent } from './component/sc10/sc1001-login/sc1001-login.component';
import { Sc1003EvaluationResultComponent } from './component/sc10/sc1003-evaluation-result/sc1003-evaluation-result.component';

// サービス関連

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Sc1001LoginComponent,
    Sc1003EvaluationResultComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

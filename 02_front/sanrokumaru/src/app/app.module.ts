// 機能に関するモジュール類
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/utils/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MessagesComponent } from './component/common/messages/messages/messages.component';
import { ErrorMessagesComponent } from './component/common/messages/error-messages/error-messages.component';
import { SidenavComponent } from './component/common/sidenav/sidenav.component';
import { MatDatepickerYearComponent } from './component/common/date/mat-datepicker-year/mat-datepicker-year.component';
import { CompanyListComponent } from './component/pages/company-list/company-list.component';
import { CompanyDetailComponent } from './component/pages/company-detail/company-detail.component';

import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { YesNoDialogComponent } from './component/common/dialog/yes-no-dialog/yes-no-dialog.component';

// 他言語化の設定
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// dateのpipe用の他言語設定
registerLocaleData(localeJa, 'ja-JP');

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
    ErrorMessagesComponent,
    SidenavComponent,
    MatDatepickerYearComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    YesNoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MaterialModule,
    FormsModule, AppRoutingModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), ReactiveFormsModule
  ],
  entryComponents: [
    YesNoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

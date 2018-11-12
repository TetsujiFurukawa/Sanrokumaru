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

import { If1001LoginComponent } from './component/if10/if1001-login/if1001-login.component';
import { If1003EvaluationResultComponent } from './component/if10/if1003-evaluation-result/if1003-evaluation-result.component';
import { SearchInfoComponent } from './component/common/search-info/search-info.component';

// サービス関連

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    If1001LoginComponent,
    If1003EvaluationResultComponent,
    SearchInfoComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

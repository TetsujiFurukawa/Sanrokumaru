import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

import { Sc1001LoginComponent } from './component/sc10/sc1001-login/sc1001-login.component';
import { Sc1003EvaluationResultListComponent } from './component/sc10/sc1003-evaluation-result-list/sc1003-evaluation-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Sc1001LoginComponent,
    Sc1003EvaluationResultListComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

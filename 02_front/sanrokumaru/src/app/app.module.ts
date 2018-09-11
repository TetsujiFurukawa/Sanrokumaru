import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BodyComponent } from './common/body/body.component';
import { FooterComponent } from './common/footer/footer.component';
import { Sc1001LoginComponent } from './sc10/sc1001-login/sc1001-login.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Sc1001LoginComponent
  ],
  imports: [
    BrowserModule, TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

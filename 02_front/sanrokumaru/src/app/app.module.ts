import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BodyComponent } from './common/body/body.component';
import { FooterComponent } from './common/footer/footer.component';
import { Screen0001LoginComponent } from './screen00/screen0001-login/screen0001-login.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Screen0001LoginComponent
  ],
  imports: [
    BrowserModule, TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

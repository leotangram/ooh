import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPlayRoutingModule } from './app.routing.module';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControlDirective,
  FormGroupDirective
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgxLoadingModule } from 'ngx-loading';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { NouisliderModule } from 'ng2-nouislider';

import { AuthModule } from './auth/auth.module';
import { LoansModule } from './loans/loans.module';
import { AuthService } from './auth/shared/auth.service';
import { SharedModule } from './shared/shared.module';

import { ExtendedHttpService } from './auth/extended-http.service';

import localeEs from '@angular/common/locales/en-US-POSIX';
import { Utility } from './shared/utils/utils.service';
import { GoogleAnalyticsEventsService } from './google-analytics-events.service';

@NgModule({
  declarations: [AppComponent],
  providers: [
    AuthModule,
    AuthService,
    Utility,
    GoogleAnalyticsEventsService,
    { provide: Http, useClass: ExtendedHttpService }
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // NgProgressModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    // NgProgressHttpModule,
    ReactiveFormsModule,
    SuiModule,
    NouisliderModule,
    LoansModule,
    AuthModule,
    SharedModule,
    NgPlayRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localeEs);

import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common'; 
import { SuiModule, SuiDatepickerModule, SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';

import { AuthRoutingModule }   from './auth-routing.module';

import { AuthService } from './shared/auth.service';
import { AuthGuardService } from "./shared/auth-guard.service";
import { LoginGuardService } from "./shared/login-guard.service";
import { LandingComponent } from './landing/landing.component';
import { NouisliderModule } from 'ng2-nouislider';
import { RequestComponent } from './request/request.component';

import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NgxLoadingModule } from 'ngx-loading';
import { FaqComponent } from './faq/faq.component';
import { AditionalComponent } from './aditional/aditional.component';
import { TestComponent } from './test/test.component';


@NgModule({
  imports: [ 
    AuthRoutingModule,
    SuiModule, SuiDatepickerModule, SuiCheckboxModule, SuiRatingModule,
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    CommonModule,
    NgxLoadingModule
  ],
  providers: [ 
    AuthService,
    AuthGuardService,
    LoginGuardService,
    
  ],
  declarations: [
    LandingComponent,
    LoginComponent,
    RequestComponent,
    ForgotComponent,
    FaqComponent,
    AditionalComponent,
    TestComponent,
  ]
  
})
export class AuthModule { }

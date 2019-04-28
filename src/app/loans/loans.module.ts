import { NgModule,
         LOCALE_ID }      from '@angular/core';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { CommonModule, DatePipe, TitleCasePipe }   from '@angular/common';  

import { NouisliderModule } from 'ng2-nouislider';
import { SuiModule } from 'ng2-semantic-ui';
import { MomentModule } from 'angular2-moment';


import { AuthModule }       from '../auth/auth.module';
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../users/user.module";

import { LoanComponent }       from './loan/loan.component';
import { LoansService }       from './shared/loans.service';
import { LoansRoutingModule }  from './loans-routing.module';
import { LoanListActiveComponent } from './loan-list-active/loan-list-active.component';
import { FormatStringToNumberPipe } from './string-to-number.pipe';
import { RoundPipe } from './floor.pipe';

import { FieldErrorDisplayComponent } from "../shared/forms-validation/field-error-display.component";


@NgModule({
  imports: [ 
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoansRoutingModule,
    NouisliderModule,
    SuiModule,
    MomentModule,
    AuthModule,
    SharedModule,
    UserModule
  ],
  declarations: [
    LoanComponent,
    LoanListActiveComponent,
    FieldErrorDisplayComponent,
    FormatStringToNumberPipe,
    RoundPipe,
  ],
  providers: [
    LoansService,
    { provide: LOCALE_ID, useValue: "en-US" },
    DatePipe,
    TitleCasePipe
  ],
})
export class LoansModule { }

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';  
import { UsersService }   from "./shared/user.service";


@NgModule({
  imports: [ 
    CommonModule,
  ],
  declarations: [
    // LoanComponent,
  ],
  providers: [
    UsersService,
    // LoansService,
    // { provide: LOCALE_ID, useValue: "en-US" }
  ],
})
export class UserModule { }

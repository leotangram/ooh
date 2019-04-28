import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';  
import { MessagesService } from "./messages/messages.service";
import { FieldErrorDisplayComponent } from "./forms-validation/field-error-display.component";


@NgModule({
  imports: [ 
    CommonModule,
  ],
  declarations: [
    // LoanComponent,
  ],
  providers: [
    MessagesService,
    FieldErrorDisplayComponent,
    // LoansService,
    // { provide: LOCALE_ID, useValue: "en-US" }
  ],
})
export class SharedModule { }

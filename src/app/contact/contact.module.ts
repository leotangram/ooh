import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SuiModule } from 'ng2-semantic-ui';


import { ContactRoutingModule } from './contact-routing.module';
import { FaqComponent } from './faq/faq.component';
import { ContactService } from "./shared/contact.service";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    SuiModule
  ],
  declarations: [
    FaqComponent,
    ContactComponent,
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }

import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { AuthGuardService } from "../auth/shared/auth-guard.service";

import { FaqComponent }         from "./faq/faq.component";
import { ContactComponent }         from "./contact/contact.component";

const routes: Routes = [
  { path: '',
    children: [
      {  path: 'faq', component: FaqComponent, canActivate: [ AuthGuardService ]},
      {  path: 'contact', component: ContactComponent, canActivate: [ AuthGuardService ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}



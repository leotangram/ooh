import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { LoanComponent } from './loan/loan.component';
import { AuthGuardService } from "../auth/shared/auth-guard.service";
import { LoanListActiveComponent } from "./loan-list-active/loan-list-active.component";

const routes: Routes = [
  { path: '',
    // component: LoansRoutingModule,
    children: [
      {  path: '', component: LoanComponent, canActivate: [ AuthGuardService ]},
      {  path: 'publications', component: LoanListActiveComponent, canActivate: [ AuthGuardService ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule {}



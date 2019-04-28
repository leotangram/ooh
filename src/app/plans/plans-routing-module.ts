import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { AuthGuardService } from "../auth/shared/auth-guard.service";

import { PlansComponent } from './plans/plans.component';


const routes: Routes = [
  { path: '',
    children: [
	    {  path: 'main', component: PlansComponent, canActivate: [ AuthGuardService ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule {}
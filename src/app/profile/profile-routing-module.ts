import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { AuthGuardService } from "../auth/shared/auth-guard.service";

import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: '',
    children: [
	    {  path: 'info', component: InfoComponent, canActivate: [ AuthGuardService ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
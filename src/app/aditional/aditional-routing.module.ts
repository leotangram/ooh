import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { AuthGuardService } from "../auth/shared/auth-guard.service";

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';


const routes: Routes = [
  { path: '',
    children: [
       {  path: 'one', component: OneComponent, canActivate: [ AuthGuardService ]},
       {  path: 'two', component: TwoComponent, canActivate: [ AuthGuardService ]},
       {  path: 'three', component: ThreeComponent, canActivate: [ AuthGuardService ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AditionalRoutingModule {}
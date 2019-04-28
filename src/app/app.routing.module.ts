import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {  path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  {  path: 'dashboard', loadChildren: 'app/loans/loans.module#LoansModule' },
  {  path: 'aditional', loadChildren: 'app/aditional/aditional.module#AditionalModule' },
  {  path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
  {  path: 'plans', loadChildren: 'app/plans/plans.module#PlansModule' },
  {  path: '**', redirectTo: '/auth/landing' }
]


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class NgPlayRoutingModule { }

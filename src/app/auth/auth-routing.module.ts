import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginGuardService } from './shared/login-guard.service'
import { LandingComponent } from './landing/landing.component'
import { RequestComponent } from './request/request.component'
import { AditionalComponent } from './aditional/aditional.component'
import { LoginComponent } from './login/login.component'
import { ForgotComponent } from './forgot/forgot.component'
import { FaqComponent } from './faq/faq.component'
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    // component: LoginComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'test',
        component: TestComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'register',
        component: RequestComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'aditional',
        component: AditionalComponent,
        canActivate: [LoginGuardService]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

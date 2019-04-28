import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';

import { FormsModule,
  ReactiveFormsModule }    from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { MomentModule } from 'angular2-moment';
import { PlansRoutingModule } from './plans-routing-module';
import { AuthModule }       from '../auth/auth.module';
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../users/user.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SuiModule,
    MomentModule,
    AuthModule,
    SharedModule,
    UserModule,
    PlansRoutingModule
  ],
  declarations: [PlansComponent]
})
export class PlansModule { }

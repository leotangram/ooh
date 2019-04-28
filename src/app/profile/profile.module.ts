import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
  ReactiveFormsModule }    from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { SuiModule } from 'ng2-semantic-ui';
import { MomentModule } from 'angular2-moment';
import { ProfileRoutingModule } from './profile-routing-module';
import { AuthModule }       from '../auth/auth.module';
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../users/user.module";
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NouisliderModule,
    SuiModule,
    MomentModule,
    AuthModule,
    SharedModule,
    UserModule,
    ProfileRoutingModule
  ],
  declarations: [InfoComponent]
})

export class ProfileModule { }

import { NgModule,
  LOCALE_ID }      from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FormsModule,
  ReactiveFormsModule }    from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { MomentModule } from 'angular2-moment';

import { AditionalRoutingModule } from './aditional-routing.module';
import { AuthModule }       from '../auth/auth.module';
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../users/user.module";
import { NgxLoadingModule } from 'ngx-loading';

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
    NgxLoadingModule,
    AditionalRoutingModule
  ],
  declarations: [OneComponent, TwoComponent, ThreeComponent]
})
export class AditionalModule { }

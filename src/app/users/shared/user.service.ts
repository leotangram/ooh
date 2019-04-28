import { Injectable }     from '@angular/core';
import { Headers, 
         Http, 
         Response, 
         URLSearchParams, 
         RequestOptions } from '@angular/http';
import { Router }         from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { environment }    from '../../../environments/environment';
import { Subject }        from 'rxjs/Subject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../users/shared/user.model';
import { AuthService } from "../../auth/shared/auth.service";

const API_URL = environment.api_url;


@Injectable()
export class UsersService {

  public loggedUser: User;
  public AGGREGATED_LOAN_INDEX = 0;
  // public userPersonalInfo: Observable<UserPersonalInfo>;

  constructor(
    private http: Http, 
    private router: Router,
    private authService: AuthService) { 
  
  }

  /* Method for getting logged user personal info */
  // public getLoggedUserPersonalInfo(): Observable<UserPersonalInfo> {


  //   if (this.userPersonalInfo)
  //     return this.userPersonalInfo

  //   let user = this.authService.getLoggedUser();

  //   const CUSTOMER_ID = user.mo_profile.customer.id;

  //   this.userPersonalInfo = this.http
  //              .get(`${API_URL}/partner/customers/${CUSTOMER_ID}/extrainfo/`)
  //              .map(response => response.json().loan_extra_info as UserPersonalInfo)
  //              .publishReplay(1)
  //              .refCount();

  //   return this.userPersonalInfo;

  // }

  public getLoggedUserCustomer(): number {

    let user = this.authService.getLoggedUser();

    const CUSTOMER_ID = user.mo_profile.customer.id;

    return CUSTOMER_ID;

  }


}

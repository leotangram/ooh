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
import { Loan,
         Payment,
         PromoBanner } from './loan.model';
import { AuthService } from "../../auth/shared/auth.service";

const API_URL = environment.api_url;


@Injectable()
export class LoansService {

  public loggedUser: User;
  public userLoansResponse: Observable<Loan[]>;
  

  constructor(
    private http: Http, 
    private router: Router,
    private authService: AuthService) { 
      this.loggedUser = this.authService.getLoggedUser();  
  }

  public form1(credentials: any): Observable<any>{
    return this.http
      .post(`${API_URL}/customers/register/profile/`, credentials)
      .map(response => {
        let res = response.json();
        return res;
      })
  }
  
}

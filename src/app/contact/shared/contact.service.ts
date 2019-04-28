import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Observable }     from 'rxjs/Observable';

import { environment }    from '../../../environments/environment';

import { AuthService } from "../../auth/shared/auth.service";

const API_URL = environment.api_url;


@Injectable()
export class ContactService {

  constructor(
    private http: Http, 
    private router: Router,
    private authService: AuthService) { }

  public sendMessage(message: any): Observable<Response> {

    let user = this.authService.getLoggedUser();

    const CUSTOMER_ID = user.mo_profile.customer.id;

    return this.http.post(`${API_URL}/customers/${CUSTOMER_ID}/contact`, message)
               .map(response => {
                  return response.json()
                })
  }
}

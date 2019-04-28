import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";


import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { BehaviorSubject} from 'rxjs/Rx';

import { User } from '../../users/shared/user.model';
import { element } from 'protractor';

const API_URL = environment.api_url;

@Injectable()
export class AuthService {

  public isLoggedIn: boolean;
  public loggedUser: User;
  public loginEvent: Subject<User>;

  constructor(
    private http: Http, 
  	private router: Router ) { 
      this.loginEvent = new BehaviorSubject<User>(undefined);  
  }

  public login(credentials: any): Observable<User>{
    let data = {
      'username': credentials.username,
      'password': credentials.password
    }

    return this.http
      .post(`${API_URL}/customers/login/`, data)
      .map(response => {
        let res = response.json();
        AuthService.saveUserLocalStorage(res.key);
        return res;

      })

  }

  // public login(): any{
  //   let response = {
  //     "key": "eyJjdXN0b21lcl9pZCI6NH0.DzzLTg.hfdE3FTWDA6LH_1AoCoU1coqLQg",
  //     "action":"T"
  //   }

  //   AuthService.saveUserLocalStorage(response.key);
  //   // this.loginEvent.next(user);
  //   // this.setLoggedUser(user);
  //   return response;
  // }

  public register(credentials: any): Observable<any>{
    let data = {
      user: {
        username: credentials.username,
        password: credentials.password
      },
      terms_conditions : credentials.terms
    }

    return this.http
      .post(`${API_URL}/customers/register/user/`, data)
      .map(response => {
        
        let user = new User(response.json());
        AuthService.saveUserLocalStorage(user);
        this.loginEvent.next(user);
        this.setLoggedUser(user);
        return user;

      })
  }

  // public register(credentials: any): Observable<any>{
  //   let data = {
  //     user: {
  //       username: credentials.username,
  //       password: credentials.password
  //     },
  //     terms_conditions : credentials.terms
  //   }

  //   return this.http
  //     .post(`${API_URL}/customers/register/user/`, data)
  //     .map(response => {
  //       return response;
  //     })
  //     .catch(this.handleErrorHiddenField)
  // }

  public isLogged(): boolean{

    let isLogged = this.getLoggedUser();

    this.isLoggedIn = isLogged ? true: false; 
    
    return this.isLoggedIn;

  }

  public setLoggedUser(user: User): void {

    this.loggedUser = user;

  }

  public getLoggedUser(): any{
 
    let loggedUserInfo = localStorage.getItem("app.token");
    
      if (!loggedUserInfo){

        return;

      }

    return loggedUserInfo;
  }

  public logout(): void{

    this.isLoggedIn=false;

    localStorage.removeItem("app.token");
    localStorage.removeItem("app.amount");
    localStorage.removeItem("app.user");

  }


  static saveUserLocalStorage(token: any): void{
    localStorage.setItem(
      'app.token', JSON.stringify(token)
    );
  }


  public handleError(error: Response) {

    if (error.json().non_field_errors)
      throw Observable.throw(error.json().non_field_errors.pop());

    Object.keys(error.json()).forEach(key => {
      let errorMsg = error.json()[key].pop();
      let errorResponse = `${key}: ${errorMsg}`;
      throw Observable.throw(errorResponse);
    })

    return Observable.throw(error.json())

  }

  public handleErrorHiddenField(error: Response): ErrorObservable {

    if (error.json().non_field_errors)
      throw Observable.throw(error.json().non_field_errors.pop());

    Object.keys(error.json()).forEach(key => {
      let errorMsg = error.json()[key];
      let errorResponse = `${key}: ${errorMsg}`;
      throw Observable.throw(errorResponse);
    })

    return Observable.throw(error.json())

  }

}

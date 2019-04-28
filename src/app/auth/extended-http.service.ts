import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from "./shared/auth.service";
import { MessagesService } from "../shared/messages/messages.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { error } from 'util';

@Injectable()
export class ExtendedHttpService extends Http {

  private ERROR_401: number = 401;
  private ERROR_403: number = 403;

  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    private router: Router,
    private messageService: MessagesService) {

      super(backend, defaultOptions);

  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    //do whatever 
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      this.setHeaders(options);

    } else {
      this.setHeaders(url);
    }

    return super.request(url, options)
      .map((res)=> {
        if(res.headers.get("token")){
          localStorage.setItem('app.token', JSON.stringify(res.headers.get("token")));
          return res;
        }

        return res;
      }
    ).catch((err) => {
      let unathorized_call = err.status === this.ERROR_401 || err.status === this.ERROR_403;
      if (unathorized_call) {
        ExtendedHttpService._clearAuthToken();
        this.messageService.sendMessage('La sesion es invalida o ha expirado! Por favor ingrese nuevamente al portal');
        this.router.navigate(['/auth/landing'])
        return Observable.empty<Response>();
      }
      return Observable.throw(err);
    });
  }

  private catchErrors(res) {
    return (res: Response) => {

      let unathorized_call = res.status === this.ERROR_401 || res.status === this.ERROR_403;
      if (unathorized_call) {
        //handle authorization errors
  
        ExtendedHttpService._clearAuthToken();
        this.messageService.sendMessage('La sesion es invalida o ha expirado! Por favor ingrese nuevamente al portal');
        this.router.navigate(['/auth/landing'])
        return Observable.empty<Response>();

      }
      return Observable.throw(res);
    };
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    //add whatever header that you need to every request
    //in this example I add header token by using authService that I've created
    const token = ExtendedHttpService._getAuthToken();
    objectToSetHeadersTo.headers.set('Authorization', `Token: ${token}`);
    objectToSetHeadersTo.headers.set("Content-Type", 'application/json');
  }

  private static _getAuthToken(): string{
    const token = localStorage.getItem('app.token');
    return JSON.parse(token);
  }

  private static _clearAuthToken(): void{
    localStorage.removeItem("app.token");
    localStorage.removeItem("app.user");
  }
}

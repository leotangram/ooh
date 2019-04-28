import { Injectable } from '@angular/core';
import { RequestOptions, 
         BaseRequestOptions, 
         RequestOptionsArgs } from '@angular/http';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

    constructor() {
      super();
    }

    private _getAuthToken(): string{
      const token = localStorage.getItem('app.token');
      return JSON.parse(token);
    }


    merge(options?: RequestOptionsArgs): RequestOptions {
      const token = this._getAuthToken();
      const newOptions = super.merge(options);

      if (token) {
          newOptions.headers.set('Authorization', `Token: ${token}`);
      }

      return newOptions;
    }
}

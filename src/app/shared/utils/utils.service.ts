import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import * as FileSaver from 'file-saver';
import { environment } from '../../../environments/environment';
import { Router }      from '@angular/router';
import {GoogleAnalyticsEventsService} from "../../google-analytics-events.service";
import { User } from '../../users/shared/user.model';

const API_URL = environment.api_url;

@Injectable()
export class Utility {
    public scWidth: number;

    constructor(
      private http: Http,
      public googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) { }

    public downloadFile(id: string, type: string, customer: number) {

      const filename = type === 'EXTRACT' ? 'EXTRACT_' + customer : 'CLEARANCE_' + customer;
      const typeNo = type === 'EXTRACT' ? '1' : '2';

      const data = {
        'loan_id': id
      };

      return this.http.post(`${API_URL}/customers/${customer}/documents/CLEARANCE/`, data )
          .map((response: any) => {
           return JSON.parse(response._body);
          })
    }

    public downloadExtract(id: string, type: string, customer: number) {

      const data = {
        'loan_id': id
      };

      return this.http.post(`${API_URL}/customers/${customer}/documents/EXTRACT/`, data )
          .map((response: any) => {
           return JSON.parse(response._body);
          })
    }


    public getLargeSize():number {
      this.scWidth = (window.screen.width);
      return (this.scWidth);
    }

    public submitEventGA(
      category:string, 
      action:string, 
      label:string= null,
      extraData:string=null
    ){
      let source = "portal";
      this.googleAnalyticsEventsService.emitEvent(category, action, label, 10);
      this.sendMetrics(category,action,label,extraData,source);
    }
    
    public sendMetrics(
      category:string, 
      action:string, 
      label:string= null,
      extraData:string=null,
      source:string
    ){
      
      //GET visitor_id, session_id, customer_id
      let user = this.getLoggedUser();
      let customer_id;
      if(user == undefined){
        customer_id = "";
      }else{
        customer_id = user.mo_profile.customer.id;
      }
      let visitor_id = this.getVisitor();
      let session_id = ""; 
      

      let data = {
        category:category, 
        action:action, 
        label:label,
        extraData:extraData,
        source:source,
        visitor_id:visitor_id,
        session_id:session_id, 
        customer_id:customer_id

      }
      
      return this.http
      .post(`${API_URL}/metrics/put_record`, data)
      .subscribe((response: any) => {
        //Do Nothing
      });
      
      // console.log(data)
      // return true
    }

    public getLoggedUser(): User{
 
      let loggedUserInfo = localStorage.getItem("app.user");
      
        if (!loggedUserInfo){
  
          return undefined;
  
        }
  
      return new User(JSON.parse(loggedUserInfo));
    }

    public getVisitor(): string{
      let visitorInfo = localStorage.getItem("app.visitor");
        if (!visitorInfo){
          //Generate and save
          let visitor = this.newGuid()
          localStorage.setItem(
            'app.visitor', visitor
          )
          return visitor;
  
        }
      return (visitorInfo);
    }

    public newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      });
  }
}

import { Component, OnInit, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { User }        from '../../users/shared/user.model';
import { Utility } from '../../shared/utils/utils.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';

export interface IContext {
  data: {};
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('modalInfo')
  public modalInfo:ModalTemplate<IContext, string, string>;

  @ViewChild('modalInfo2')
  public modalInfo2:ModalTemplate<IContext, string, string>;

  @ViewChild('modalInfo3')
  public modalInfo3:ModalTemplate<IContext, string, string>;

	public user: User;
  public auth: {};
  public item: boolean;
  public showError: boolean;
  public isLarge: boolean;
  public loading: boolean = false;
  public error: boolean = false;
  public errorMsg: string = "";

  loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
  });

  constructor(
    private authService:AuthService,
    private router:Router,
    public modalService: SuiModalService,
    private utils: Utility,
  ) { }

  ngOnInit() {
    this.item = false;
    this.loginForm.reset();
    this.auth = {}; 
    this.showError = false;
    this.isLarge = window.innerWidth >= 1150;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  public login(){
    
    this.loading = true;
    let credentials = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }

    this.authService.login(credentials)
    .subscribe( response => {
      this.loading = false;
      let status = response['action'];

      switch(status) { 
        case "EX": { 
          this.message();
          this.authService.logout();
          break; 
        } 
        case "L": { 
          this.router.navigate(["/aditional/one"]);
          break; 
        } 
        case "FW": { 
          // validando informacion
          this.router.navigate(["/dashboard",{ state: '0' }]);
          break; 
        } 
        case "T": { 
          this.router.navigate(["/dashboard"]);
          break; 
        } 
        case "TR": { 
          this.router.navigate(["/dashboard"]);
          break; 
        } 
        case "A": { 
          this.router.navigate(["/dashboard"]);
          break; 
        }
        case "I": { 
          //mora, solo pagos
          this.router.navigate(["/dashboard"]);
          break; 
        } 
        case "G": { 
          this.router.navigate(["/aditional/one"]);
          break; 
        } 
        case "Z": { 
          this.router.navigate(["/aditional/one"]);
          break; 
        } 
        case "LX": { 
          this.block();
          this.authService.logout();
          break; 
        } 
        default: { 
          console.log("default"); 
           break; 
        } 
     } 
    },
    error => {
      this.loading = false;
      console.log('error', error);
      this.open(error);
    });
    
  }

  public forgot(){
    this.router.navigate(["/auth/forgot"]);
    // this.loading = true;
  }

  public scroll2(page){
    this.router.navigate(["/auth/landing"])
  }

  public request(){
    this.router.navigate(["/auth/request"])
  }

  public open(message): void {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalInfo);
    /* modal data */
    let modalData = {
      message: "Ups! Hubo un error en tu solicitud."
    }
    /* Set config for modal */
    config.size = "tiny";
    config.context = {
      data: modalData
    }
    /* Open modal and set callbacks for Approve or Deny user response */
    this.modalService
      .open(config)
      .onApprove(result => { 
         
      })
      .onDeny(result => { /* deny callback */});
  }

  public message(): void {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalInfo2);
    /* modal data */
    let modalData = {
      message: "Ups! Hubo un error en tu solicitud."
    }
    /* Set config for modal */
    config.size = "tiny";
    config.context = {
      data: modalData
    }
    /* Open modal and set callbacks for Approve or Deny user response */
    this.modalService
      .open(config)
      .onApprove(result => { 
         
      })
      .onDeny(result => { /* deny callback */});
  }

  public block(): void {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalInfo3);
    /* modal data */
    let modalData = {
      message: "Ups! Hubo un error en tu solicitud."
    }
    /* Set config for modal */
    config.size = "tiny";
    config.context = {
      data: modalData
    }
    /* Open modal and set callbacks for Approve or Deny user response */
    this.modalService
      .open(config)
      .onApprove(result => { 
         
      })
      .onDeny(result => { /* deny callback */});
  }

}

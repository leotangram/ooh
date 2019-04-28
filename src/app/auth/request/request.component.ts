import { Component, OnInit,ViewChild, EventEmitter, HostListener } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';

export interface IContext {
  data: {};
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  @ViewChild('modalInfo')
  public modalInfo:ModalTemplate<IContext, string, string>;

  @ViewChild('modalInfo2')
  public modalInfo2:ModalTemplate<IContext, string, string>;

  public isLarge: boolean;
  public step: number = 0;
  public cond1: boolean = false;
  public cond2: boolean = false;
  public accept: boolean = false;
  public loading: boolean = false;

  signup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });


  constructor(
    private router: Router,
    public modalService: SuiModalService,
    private authService: AuthService
    ) { 
  
  }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    this.step = 0;
    this.cond1 = false;
    this.cond2 = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  public acceptClick(){
    this.accept = !this.accept;
  }

  public step_one(){
    this.loading = true;
    let credentials = {
      username: this.signup.get('email').value,
      password: this.signup.get('password').value,
      terms: true

    }
    this.authService.register(credentials)
      .subscribe( response => {
        this.loading = false;
        console.log(response);
        this.router.navigate(['/aditional/one']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
        this.open(error,true);
      });
  }

  public onPassChange(input){
    this.checkConditions(this.signup.get('password').value)
  }

  public checkConditions(value : string){
    this.cond1 = (value.length < 8) ? false : true; 

    let lower = /[a-z]/.test(value)
    let upper = /[A-Z]/.test(value)
    let num = /[0-9]/.test(value)
    
    this.cond2 = (lower && upper && num) ? true : false;
    
  }

  /* Open modal containing requested loan response */
  public open(message,type): void {

    let modalData = {}
    let modal;

    if (type){
      modal = this.modalInfo
      modalData = {
        message: "Otro mensaje"
      }
    }else{
      modal = this.modalInfo2
      modalData = {
        message: "Este usuario ya se encuentra registrado!"
      }
    }

    const config = new TemplateModalConfig<IContext, string, string>(modal);

    
    
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

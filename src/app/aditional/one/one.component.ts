import { Component, OnInit,ViewChild, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {LoansService} from '../../loans/shared/loans.service'


export interface IContext {
  data: {};
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {

  @ViewChild('modalInfo')
  public modalInfo:ModalTemplate<IContext, string, string>;

  @ViewChild('modalInfo2')
  public modalInfo2:ModalTemplate<IContext, string, string>;

  public isLarge: boolean;
  public loading: boolean = false;
  public step: number = 0;
  public accept: boolean = false;
  public haspage: number = -1;
  public hasredes: number = -1;
  public contact: number = -1;

  public marca: string = "";

  public page: string = "";

  public pre:string ="";
  public what:string ="";
  public number:string ="";

  public instagram:string =""
  public facebook:string =""
  public twitter:string =""
  public linkedin:string =""

  constructor(
    private router: Router,
    public loansService: LoansService,
    public modalService: SuiModalService,
  ) { }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    // this.open(true);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  public step_one(){  
    this.step += 1;
  }

  public step_two(){  
    this.loading = true;
    let credentials = {
      business: { 
        name_brand: this.marca,
        whatsapp: this.what,
        website: this.page
      },
      social_networks: [
        {
          user: this.facebook,
          link: "", 
          social_network: "FB"
        },
        {
          user: this.instagram,
          link: "", 
          social_network: "IG"
        },
        {
          user: this.twitter,
          link: "", 
          social_network: "TW"
        },
        {
          user: this.linkedin,
          link: "", 
          social_network: "IN"
        }
      ],

      has_social_network: this.hasredes == 0 ? 'Y':'N',
      has_web_page: this.haspage == 0 ? 'Y':'N',
      want_advice: this.contact == 0 ? true:false
    }

    this.loansService.form1(credentials)
    .subscribe( response => {
      this.loading = false;
      this.open(true);
    },
    error => {
      this.loading = false;
      console.log('error', error);
      this.open(error);
    });
  }

  public changeOpen(){
    console.log("opne")
  }

  public acceptClick(){
    this.accept = !this.accept;
  }

  public haspageClick(number){
    this.haspage = number;
  }

  public hasredesClick(number){
    this.hasredes = number;
    console.log(this.hasredes+''+this.contact)
  }

  public contactClick(number){
    this.contact = number;
  }

  public contactAc(){
    this.contact = 0;
  }

  public noInfo(){
    this.open(false)
  }

  /* Open modal containing requested loan response */
  public open(param): void {
    let modal; 

    if(param){
      modal = this.modalInfo
    }else{
      modal = this.modalInfo2
    }
    const config = new TemplateModalConfig<IContext, string, string>(modal);
  
    /* Set config for modal */
    config.size = "tiny";
    
    /* Open modal and set callbacks for Approve or Deny user response */
    this.modalService
      .open(config)
      .onApprove(result => { 
         this.router.navigate(['/dashboard']);
      })
      .onDeny(result => { /* deny callback */});
  }

}

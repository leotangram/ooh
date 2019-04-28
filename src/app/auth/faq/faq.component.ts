import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';

export interface IContext {
  data: {};
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  @ViewChild('modalInfo')
  public modalInfo:ModalTemplate<IContext, string, string>;
  public isLarge: boolean = false;
  public type: string = "faq";
  public sent: boolean = false;

  constructor(
    private router:Router,
    public modalService: SuiModalService
  ) { }

  ngOnInit() {
    this.type = "faq"
    this.sent = false;
    this.isLarge = window.innerWidth > 1350;
  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth > 1350;
  }

  public faqType(arg: string){
    this.type = arg;
  }

  public changeOpen(){
    console.log("change")
  }

  public sendMessage(){
    this.sent = true;
  }

  public back(){
    this.sent = false;
  }

  public request(){
    this.router.navigate(["/request"]);
  }

  public scroll2(page){
    this.router.navigate(["/auth/landing"])
  }

  public goToLogin(){
    this.router.navigate(["/auth/login"])
  }

  /* Open modal containing requested loan response */
  public open(): void {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalInfo);
  
    /* Set config for modal */
    config.size = "small";
    config.context = {
      data: ""
    }
  
    /* Open modal and set callbacks for Approve or Deny user response */
    this.modalService
      .open(config)
      .onApprove(result => { console.log("Approved"); })
      .onDeny(result => { /* deny callback */});
  }

}

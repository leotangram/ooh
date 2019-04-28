import { Component, OnInit, EventEmitter, HostListener, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { FormGroup,
  FormBuilder,
  Validators } from "@angular/forms";
import { AuthService } from "../../auth/shared/auth.service";
import { User } from "../../users/shared/user.model";
import { LoansService } from "../shared/loans.service";
import { UsersService } from "../../users/shared/user.service";
import { Inject } from '@angular/core';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';


export interface IContext {
data: {};
}

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
  providers:[{ provide: Window, useValue: window }  ]
})

export class LoanComponent implements OnInit {

  @ViewChild('modalInfo')
  public modalInfo:ModalTemplate<IContext, string, string>;

  public isLarge: boolean;
  public state = 0;
  public userName: string;
  private loanDataSlider;
  public user: User;
  public maxValue: number;
  public durationArray: any[] = [] ;
  public duration: any = {};
  public configs: any[];

  constructor( 
    @Inject(Window) private window: Window,
    private authService: AuthService,
    public modalService: SuiModalService,
    ) { 

    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isLarge = window.innerWidth >= 1150;
    }

    ngOnInit() {
      this.isLarge = window.innerWidth >= 1150;
      this.state = 1;
    }

    public open(message,type): void {
      const config = new TemplateModalConfig<IContext, string, string>(this.modalInfo);
      /* Set config for modal */
      config.size = "tiny";
      /* Open modal and set callbacks for Approve or Deny user response */
      this.modalService
        .open(config)
        .onApprove(result => { 
        })
        .onDeny(result => { /* deny callback */});
    }
}
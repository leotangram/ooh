import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DateFormatPipe } from 'angular2-moment';
import { LoansService } from "../shared/loans.service";
import { AuthService } from "../../auth/shared/auth.service";
import { Loan } from "../shared/loan.model";
import { Payment } from "../shared/loan.model";
import { User } from "../../users/shared/user.model";
import {GoogleAnalyticsEventsService} from "../../google-analytics-events.service"
import { Utility } from '../../shared/utils/utils.service';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';

export interface IContext {
  data: {};
}

@Component({
  selector: 'app-loan-list-active',
  templateUrl: './loan-list-active.component.html',
  styleUrls: ['./loan-list-active.component.scss'],
})
export class LoanListActiveComponent implements OnInit {

  @ViewChild('modalExtractResponseTemplate')
  public modalExtractResponseTemplate:ModalTemplate<IContext, string, string>;
  
  public isLarge:any;
  public state: number = 0;
  

  constructor(
    private authService: AuthService,
    private router:Router,
    private utils: Utility,
    public modalService: SuiModalService,
    ) { 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    this.state = 0;
  }

  public largePub(id:any){
    document.getElementById('pub'+id).style.visibility = 'visible';
    document.getElementById('close'+id).style.visibility = 'visible';
  }

  public closePub(id:any){
    document.getElementById('pub'+id).style.visibility = 'hidden';
    document.getElementById('close'+id).style.visibility = 'hidden';
  }







}

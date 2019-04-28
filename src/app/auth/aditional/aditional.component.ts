import { Component, OnInit,ViewChild, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';

export interface IContext {
  data: {};
}

@Component({
  selector: 'app-aditional',
  templateUrl: './aditional.component.html',
  styleUrls: ['./aditional.component.scss'],
})
export class AditionalComponent implements OnInit {

  public isLarge: boolean;
  public chanel: number = -1;
  public tone: number = -1;

  @ViewChild('modalInfo')
  public modalInfo:ModalTemplate<IContext, string, string>;
  public step: number;

  constructor(
    private router: Router,
    public modalService: SuiModalService,
  ) { }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    this.step=0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  public chanelClick(number){
    this.chanel = number;
  }

  public toneClick(number){
    this.tone = number;
  }

}

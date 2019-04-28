import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {


  public isLarge: boolean;
  public state = 0;
  public sell = -1;
  public point = -1;
  public other = -1;

  constructor(
  ) { }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    this.state = 0;
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.isLarge = window.innerWidth >= 1150;
    }

  public changeState(state:number){
    this.state = state;
  }

  public sellClick(op: number){
    this.sell = op;
  }

  public pointClick(op: number){
    this.point = op;
  }

  public otherClick(op: number){
    this.other = op;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {

  public plan: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  public planEvent(){
    // console.log(this.plan)
  }

}

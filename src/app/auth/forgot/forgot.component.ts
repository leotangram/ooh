import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {

  public isLarge: boolean;
  public wizard: number = 0;
  public auth:any = {};

  forgotForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
  });

  forgotForm2 = new FormGroup({
    code: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    password2: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private router:Router,) { }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    this.wizard = 0;
    this.auth = {
      code: "",
      number: "",
      password: "",
      password2: "",
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1024;
  }

  public step_one(){
    this.wizard += 1;
  }

  public step_two(){
    this.wizard += 1;
  }

  public finish(){
    this.router.navigate(["/auth/login"])
  }

  public scroll2(page){
    this.router.navigate(["/auth/landing"])
  }

  public goToLogin(){
    this.router.navigate(["/auth/login"])
  }

  public request(){
    this.router.navigate(["/auth/request"])
  }
}

import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('sideBar', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('page', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms 200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms 200ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  // public user: User;
  public isLarge: boolean;
  private loanDataSlider;
  public geolocationPosition;

  stateChanged: EventEmitter<boolean> = new EventEmitter();

  loginForm = new FormGroup({
    login: new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', Validators.required)
    })
  });

  public signupForm = new FormGroup({
    step_one: new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$')
      ])
    }),
    step_two: new FormGroup({
      confirmation_code: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')
      ]),
      dni_digits: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern('^[0-9]*$')
      ]),
      date: new FormControl('', [Validators.required])
    }),
    step_three: new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password_confirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  });

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
      
    }

  public request(){
    this.router.navigate(['/auth/request']);
  }


  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    this.loanDataSlider = {
      range: {
        min: 100,
        max: 50000
      },
      step: 100,
      selectedValue: 25000,
      tooltips: false,
      format: {
        to: function ( value ) {
          return '$ ' + parseFloat(value).toFixed(2);
        },
        from: function ( value ) {
        return value.replace('$ ', '');
        }
      },
      connect: [true, false],
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  public scroll(el) {
    let tag = window.top.document.getElementById(el);
    tag.scrollIntoView({ behavior: 'smooth' });
  }

  public scroll2(el) {
    let tag = window.top.document.getElementById(el);
    tag.scrollIntoView({ behavior: 'smooth' });
  }

  public login(){
    this.router.navigate(['/auth/login/']);
  }

  public loanOnChange(event){
    localStorage.setItem('app.amount', event);
  }

  public goToLogin(){
    this.router.navigate(["/auth/login"])
  }

  public goToRegister(){
    this.router.navigate(["/auth/register"])
  }


}

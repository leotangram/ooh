import { Component, OnInit, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  public isLarge: boolean = false;
  public auth: any = {}
  public sent: number = 0;

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    message: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.auth ={
      name:"",
      email:"",
      message:""
    }
    this.isLarge = window.innerWidth > 1350;
    this.sent = 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth > 1350;
  }

  public sendMessage(){
    this.sent = 1;
  }

  public finish(){
    this.sent = 0;
  }

  public goToFAQ(){
    this.router.navigate(['/contact/faq']);
  }

}

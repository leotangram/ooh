import { Component, OnDestroy, OnChanges, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './auth/shared/auth.service';
import { MessagesService } from './shared/messages/messages.service';
import { Router, NavigationEnd } from '@angular/router';
import { UsersService } from './users/shared/user.service';
import { User } from './users/shared/user.model';
import { Observable } from 'rxjs/Observable';
import { GoogleAnalyticsEventsService } from './google-analytics-events.service';
import { trigger, style, animate, transition } from '@angular/animations';

declare var ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService],
  styleUrls: ['./app.component.scss'],
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
export class AppComponent implements OnDestroy {
  title = 'app';
  public message: any;
  public subscription: Subscription;
  private loggedUser: User;
  public userName: String;
  public isLarge: boolean;
  public sidebar: boolean = false;
  public current: any;

  constructor(
    private authService: AuthService,
    private messageService: MessagesService,
    private usersService: UsersService,
    public router: Router,
    public googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {
    this.message = {};
    this._subscribeToNotifications();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // console.log(event.url)
        this.current = event.url;
      }
    });
  }

  public openMenus(menu): void {
    switch (menu) {
      case 'sideBar':
        this.sidebar = !this.sidebar;
        break;
      default:
        break;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isLarge = window.innerWidth >= 1150;
  }

  ngOnInit() {
    this.isLarge = window.innerWidth >= 1150;
    // this.authService.loginEvent.subscribe(user => {
    //   if (user != null) {
    //     this.userName = user.mo_profile.full_name;
    //   }
    // });

    // if (this.authService.isLogged()) {
    //   this.userName = this.authService.getLoggedUser().mo_profile.full_name;
    // }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  private _subscribeToNotifications(): void {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  public logout() {
    this.authService.logout();
    location.reload();
  }

  submitEvent(category, action, label) {
    this.googleAnalyticsEventsService.emitEvent(category, action, label, 10);
  }

  public goToPage(page: string, mobile?: boolean) {
    this.router.navigate([page]);
    console.log(mobile);
    this.sidebar = mobile ? false : true;
  }

  public scroll(el) {
    let tag = window.top.document.getElementById(el);
    tag.scrollIntoView({ behavior: 'smooth' });
  }

  public scroll2(page) {
    this.router.navigate([page]);
  }

  public login(){
    this.router.navigate(['/auth/login']);
  }

  public top(){
    window.scroll(0, 0);
  }

}

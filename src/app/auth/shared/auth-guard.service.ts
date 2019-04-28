import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
  	let url: string = state.url;
    // TODO check this  
    if(this.authService.isLogged()){
      if(url=='/'){
        this.router.navigate(['/reports']);
      }
      
      
      return true;
    }

    // customer-premmiun

    this.router.navigate(['/auth/landing']);
    return false;
  }


}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router) { }

    //diff entre observation et promesse
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
        return  this.authService.isAuthenticated().then(
         
              (authenticated: boolean | any) => {
                    // authenticated ? true : false ;
                  if (authenticated) {
                     return true ;
                  } else {
                     this.router.navigate(['/']) ;
                     return false ;
                  }
              }
        ) ;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.canActivate(childRoute, state) ;
    }
}

import { Injectable } from '@angular/core';
import {User, UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    logginIn: boolean =  false;
    connectedUser: null ;

    constructor(private userService: UsersService) { }

    isAuthenticated() {
        const promise = new Promise(
          (resolve, reject) => {
                setTimeout(() => {
                      resolve(this.logginIn) ;
                },1000)
          }
        );
        return promise;
    }

    login(email: string = '', pwd: string = '') {
         this.connectedUser = this.userService.getUserByEmailAndPassword(email,pwd) ;
         if (this.connectedUser || (email==='' && pwd==='')) {
             this.logginIn = true
         } else  {
           this.logginIn = false
         }
         // // same
         // this.logginIn = this.connectedUser ? true : false ;
    }

    logout() {
      this.logginIn = false ;
      this.connectedUser = null ;
    }
}

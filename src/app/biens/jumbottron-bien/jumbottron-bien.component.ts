import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';
import {AuthguardService} from '../../../Services/authguard.service';

@Component({
  selector: 'app-jumbottron-bien',
  templateUrl: './jumbottron-bien.component.html',
  styleUrls: ['./jumbottron-bien.component.css']
})
export class JumbottronBienComponent implements OnInit {

  situation: boolean ;
  constructor(private authService: AuthService, private authguardService: AuthguardService) { }

  ngOnInit(): void {
  }

  connect() {
      this.authService.login() ;
    console.log(this.authService.logginIn );
  }

  deconnect() {
     this.authService.logout() ;
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  @ViewChild('loginform') myform: NgForm | any;
  constructor() { }

  proposerEmail(){

    const myEmail = 'niangali@gmail.com' ;
    this.myform.setValue({
      username: myEmail ,
      password: ''
    });
    this.myform.form.patchValue({
      username: 'test'
    })
  }

  ngOnInit(): void {
      console.log(this.myform.value.username);
  }
  //
  // onSubmit(form: HTMLFontElement) {
  //   console.dir(form);
  //
  // }
  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  //
  // }
  onSubmit(form: NgForm) {
      console.log(this.myform.valid);
      alert('email: '+ this.myform.value.username) ;
  }

}

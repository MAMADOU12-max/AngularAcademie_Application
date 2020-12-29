import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  errormessage: string = '' ;
  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errormessage = this.activedRoute.snapshot.data['messageError'];
  }

}

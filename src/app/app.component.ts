import {Component, OnInit} from '@angular/core';
import {SearchService} from '../Services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Wane';
  ok = false;
  activated = false;
  //search
  message: string = '';

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.currentSearch.subscribe(message => this.message = message) ;
  }

  onSubmit() {
    this.ok = !this.ok;
    this.activated  = !this.activated;
  }

}

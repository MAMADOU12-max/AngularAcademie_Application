import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../Services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search = '' ;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.currentSearch.subscribe(search => this.search = search) ;
  }

  newMessage(search) {
      this.searchService.changeValue(search) ;
  }

}

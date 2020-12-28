import { Component, OnInit } from '@angular/core';
import {BienModal} from '../../../bienModal';
import {BienService} from '../../../Services/bien.service';
import {SearchService} from '../../../Services/search.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

   search = '' ;
   biens: BienModal[] = [] ;

  constructor(private bienService: BienService, private searchService: SearchService) {

  }

  // newValue() {
  //   this.searchService.changeValue('') ;
  // }

  ngOnInit(): void {
    this.biens = this.bienService.getAllBiens() ;
    this.searchService.currentSearch.subscribe(search => this.search = search) ;
  }

}

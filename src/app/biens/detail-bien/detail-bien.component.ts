import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UtilsService} from '../../../Services/utils.service';
import {BienService} from '../../../Services/bien.service';
import {BienModal} from '../../../bienModal';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

   bienRecup: any = [] ;

  constructor(private activatedRoute: ActivatedRoute, private bienService: BienService ) { }


  ngOnInit(): void {
     const recupid =  +this.activatedRoute.snapshot.params['id'] ;
     // console.log(recupid) ;
     this.bienRecup = this.bienService.getBienById(recupid) ;
    // console.log(this.bienRecup) ;
  //   for next time that this component will be loaded
    this.activatedRoute.params.subscribe(
      (p: Params) => {
        const recupid =  +this.activatedRoute.snapshot.params['id'] ;
        // console.log(recupid) ;
        this.bienRecup = this.bienService.getBienById(recupid) ;
      }
    )

  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {UtilsService} from '../../../Services/utils.service';
import {BienService} from '../../../Services/bien.service';
import {BienModal} from '../../../bienModal';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit, OnDestroy {

   bienRecup: any = [] ;

  constructor(private activatedRoute: ActivatedRoute, private bienService: BienService ) { }


  ngOnInit(): void {
      //with resolver
      this.activatedRoute.data.subscribe(
        (data: Data) => {
              this.bienRecup = data['bien'] ;
        }
      ) ;

    //  const recupid =  +this.activatedRoute.snapshot.params['id'] ;
    //  // console.log(recupid) ;
    //  this.bienRecup = <BienModal>this.bienService.getBienById(recupid) ;
    // // console.log(this.bienRecup) ;
    // //   for next time that this component will be loaded
    // this.activatedRoute.params.subscribe(
    //   (p: Params) => {
    //     const recupid =  +this.activatedRoute.snapshot.params['id'] ;
    //     // console.log(recupid) ;
    //     this.bienRecup = this.bienService.getBienById(recupid) ;
    //   }
    // )

  }

  ngOnDestroy() {
      alert('dsetruction du component bien bien-detail') ;
  }

}

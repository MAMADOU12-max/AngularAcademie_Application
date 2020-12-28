import {Component, Input, OnInit} from '@angular/core';
import {BienModal} from '../../../../bienModal';
import {UtilsService} from '../../../../Services/utils.service';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {

  @Input() filsInput: any;

  // price: number = 10000 ;
  // date = new Date(2020,9,4) ;
  // description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea est exercitationem id rep' +
  //   'udiandae rerum sunt! Ab architecto dolorem ducimus et itaque, laudantium modi vero! Architecto eveniet id maiores natus suscipit' +
  //   ' velit voluptatum? At dolorem dolores ea, eius hic iusto minus nam quis? Ad aperiam aut dicta distinctio et eum excepturi molestias opt' +
  //   'io, quis quod ratione rerum sit ut voluptas voluptates. A accusamus accusantium ad adipisci asperiores eos, esse ex excepturi exp' +
  //   'edita fugit impedit iste laborum maior' +
  //   'es, molestias neque nesciunt omnis placeat quasi qui quia quod, rerum sequi ullam velit v';

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.utilsService.timeLeft());
  }

  onReserve() {
    // console.log('id') ;
  }

}

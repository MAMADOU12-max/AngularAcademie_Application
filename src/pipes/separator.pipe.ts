import { Pipe, PipeTransform } from '@angular/core';
import {UtilsService} from '../Services/utils.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {
  }
  // pipe qui sépare
  transform(value: number, sep: string): string {
    return this.utilsService.numberSeparator(value, sep);
  }

}

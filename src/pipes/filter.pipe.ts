import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //barre de recherche
  transform(value: any, searching: string, propName: string): any {
      //no search
      if(value.length === 0 || searching.length === 0) {
          return value;
      }

      const resultArray = [];
      for (const item of value) {
          //mot exat
          // if (item[propName] === searching) {
          //debut lettre
          // if (item[propName].startsWith(searching)) {
          // contenant la lettre
          if (item[propName].includes(searching)) {
                resultArray.push(item) ;
          }
      }
      return resultArray;
  }

}

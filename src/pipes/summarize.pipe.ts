import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})
export class SummarizePipe implements PipeTransform {

  // fonction for limit caractere
  transform(value: string, limit: number): string {
    if (value.length > limit) {
       //decoupe la chaine
       return value.substr(0,limit)+'...';
    }
    return value;
  }

}

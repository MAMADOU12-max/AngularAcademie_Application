import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  // pipe customize for separing a value .
  numberSeparator(nbr: number, sep: string){
    //convertir le nbr to string par nbr.to string
    let nombre: string = nbr.toString();
    const reg = /(\d+)(\d{3})/;
    while ( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' + sep + '$2');
    }
    return nombre;
  }

}

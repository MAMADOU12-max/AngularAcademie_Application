import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //classe qui note le comportement de la variable , a la fois observable et observeur ; prend e compte les anciennes et nouvelles données
  // par defaut on l'initialise par null
  private stringSource = new BehaviorSubject('') ;
  // permet de recuperer la nouvelle valeur
  currentSearch = this.stringSource.asObservable();

  constructor() { }

  //fonction qui change la nouvelle valeur
  changeValue(message: string) {
    console.log(message) ;
     this.stringSource.next(message) ;
  }

}

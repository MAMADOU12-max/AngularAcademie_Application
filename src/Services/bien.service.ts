import { Injectable } from '@angular/core';
import {BienModal} from '../bienModal';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor() { }

  private biens: BienModal[] = [
    {id: 1, title: 'laptop', description: 'Lorem, ipsum dolor sit amet sit amet consectetur adipisicing elit. Distinctio nihil vo consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?laptop', price: 10400, sale: true, createAt: new Date(2020, 1, 12), category: 'category', },
    {id: 2, title: 'Home', description: 'Lorem, ipsum dolorlupt', image: 'https://source.unsplash.com/1600x900?home', price: 32000, sale: false, createAt: new Date(2007, 4, 12) , category: 'category', },
    {id: 3, title: 'Bicycle', description: 'Lorem, ipsum dolor sit amet consectetu elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?bicycle', price: 3000, sale: false, createAt: new Date(2020, 11, 2) , category: 'category', },
    {id: 4, title: 'Shoes', description: 'Lorem, ipsum dolor sit amet consectetur adipisic volupt', image: 'https://source.unsplash.com/1600x900?shoes', price: 30040, sale: false, createAt: new Date() , category: 'category', },
    {id: 5, title: 'Soccer', description: 'Lorem,ing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?soccer', price: 100020, sale: false, createAt: new Date(2019, 11, 12) , category: 'category', },
    {id: 6, title: 'Computer', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. lupt', image: 'https://source.unsplash.com/1600x900?computer', price: 210000, sale: true, createAt: new Date(2019, 8, 16) , category: 'category', },
  ];

  //get all biens
  getAllBiens(): BienModal[]{
    return this.biens;
  }

  // get one bien by id
  getBienById(id: number): BienModal{
    const bienFound = this.biens.find( (b: BienModal) => {
      return b.id === id;
    });
    return <BienModal> bienFound;
  }

  //add bien
  addBien(bien: BienModal){
    this.biens.push(bien);
  }

  //update bien
  // spread Operator ES6 (A rechercher)
  updateBien(bienUpdate: BienModal){
    let bienAmodifier = this.biens.find((b: BienModal) => {
      return b.id === bienUpdate.id;
    });
    if (bienAmodifier) {
      //bien updated(spread Operator ES6)
      bienAmodifier = {...bienUpdate};
    }
  }

  deleteBien(id:number){

  }

  //incremente id even if table is null
  getLastId(): number{
    return this.biens[this.biens.length - 1] ?
          this.biens[this.biens.length - 1].id : 0;
  }


}

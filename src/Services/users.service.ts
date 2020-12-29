import { Injectable } from '@angular/core';


export interface User {
  id: number;
  nom:string;
  prenom: string
  role: string;
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:User[] = [
    {id:1, nom: 'NIANG',prenom: 'Pape Djiby', email: 'papedjibi@gmail.com', password: 'passer', role: 'ADMIN'},
    {id:2, nom: 'BA',prenom: 'Seckou', email: 'sekou@gmail.com', password: 'passer', role: 'CLIENT'},
    {id:1, nom: 'MBAYE',prenom: 'Mamadou', email: 'mamadou@gmail.com', password: 'passer', role: 'CLIENT'},
  ]
  constructor() { }

  findUserById(id: number):User {
     const user = this.users.find(
       (u:User) => {
         return u.id == id ;
       }
     ) ;
     return <User> user;
  }

  getUserByEmailAndPassword(email: string, pass: string) {
    const user = this.users.find(
      (u:User) => {
        return u.email === email && u.password === pass ;
      }
    ) ;
    return <User> user;
  }
}

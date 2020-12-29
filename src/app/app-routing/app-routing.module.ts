import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBienComponent} from '../biens/list-bien/list-bien.component';
import {AddBienComponent} from '../biens/add-bien/add-bien.component';
import {DetailBienComponent} from '../biens/detail-bien/detail-bien.component';
import {ReservationBiensComponent} from '../biens/reservation-biens/reservation-biens.component';
import {DetailsReservationComponent} from '../biens/reservation-biens/details-reservation/details-reservation.component';
import {EditReservationComponent} from '../biens/reservation-biens/edit-reservation/edit-reservation.component';
import {AuthguardService} from '../../Services/authguard.service';
import {ErrorsComponent} from '../errors/errors.component';
import {BienResolverService} from '../../Services/bien-resolver.service';
import {ConnexionComponent} from '../connexion/connexion.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: 'biens', component: ListBienComponent } ,
  {path: 'biens/add', component: AddBienComponent },
  {path: 'biens/:id', component: DetailBienComponent, resolve:{bien: BienResolverService}},

  {path: 'connexion', component: ConnexionComponent},

  // {path: 'not-found' ,component: PageNotFoundComponent},
  {path: 'reservations',
    // canActivate: [AuthguardService] , // you can acced father and children when yu are connect
   canActivateChild: [AuthguardService] ,   // you can acced father with no authentification but not children
    component: ReservationBiensComponent, children: [
      {path: ':id', component: DetailsReservationComponent},
      {path: ':id/edit', component: EditReservationComponent},
      ]},
  {path: 'not-found' ,component: ErrorsComponent, data:{messageError:'Page introuvable 404!'}},
  {path: '**', redirectTo: '/not-found'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }

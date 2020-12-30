import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbottronBienComponent } from './biens/jumbottron-bien/jumbottron-bien.component';
import { SeparatorPipe } from '../pipes/separator.pipe';
import { TimeleftPipe } from '../pipes/timeleft.pipe';
import { SummarizePipe } from '../pipes/summarize.pipe';
import {RouterModule, Routes} from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { ReservationBiensComponent } from './biens/reservation-biens/reservation-biens.component';
import { DetailsReservationComponent } from './biens/reservation-biens/details-reservation/details-reservation.component';
import { EditReservationComponent } from './biens/reservation-biens/edit-reservation/edit-reservation.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorsComponent } from './errors/errors.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './connexion/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    JumbottronBienComponent,
    SeparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBiensComponent,
    DetailsReservationComponent,
    EditReservationComponent,
    PageNotFoundComponent,
    ErrorsComponent,
    ConnexionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,          //pour les templates driven
     AppRoutingModule,
    ReactiveFormsModule   //pour react-forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

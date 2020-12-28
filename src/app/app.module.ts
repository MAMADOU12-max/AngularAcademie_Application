import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
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

const appRoutes: Routes = [
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: 'biens', component: ListBienComponent } ,
  {path: 'biens/add', component: AddBienComponent },
  {path: 'biens/:id', component: DetailBienComponent}
]

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

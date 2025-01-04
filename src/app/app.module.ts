import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { provideRouter } from '@angular/router';
import { TelefonieService } from './service/telefonie.service';
import { AddElementsComponent } from './add-elements/add-elements.component';
import { Routes, RouterModule } from '@angular/router';
import { TelefoaneDetaliiComponent } from './telefoane-detalii/telefoane-detalii.component';

const appRoutes: Routes= [
  {path: '', component: PropertyListComponent},
  {path: 'inchiriaza-telefon', component: PropertyListComponent},
  {path: 'add-element', component: AddElementsComponent},
  {path: 'telefoane-detalii/:ID', component: TelefoaneDetaliiComponent}
];

@NgModule({
  declarations: [	
    
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddElementsComponent,
    TelefoaneDetaliiComponent
   ],
  imports: [
    
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TelefonieService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { TelefoaneListComponent } from './telefoane-list/telefoane-list.component';
import { provideRouter } from '@angular/router';
import { TelefonieService } from './service/telefonie.service';
import { AddElementsComponent } from './add-elements/add-elements.component';
import { Routes, RouterModule } from '@angular/router';
import { TelefoaneDetaliiComponent } from './telefoane-detalii/telefoane-detalii.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const appRoutes: Routes= [
  {path: '', component: TelefoaneListComponent},
  {path: 'inchiriaza-telefon', component: TelefoaneListComponent},
  {path: 'add-element', component: AddElementsComponent},
  {path: 'telefoane-detalii/:ID', component: TelefoaneDetaliiComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: '**', component: TelefoaneListComponent}
  
];

@NgModule({
  declarations: [		
    
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    TelefoaneListComponent,
    AddElementsComponent,
    TelefoaneDetaliiComponent,
    UserLoginComponent,
    UserRegisterComponent
    
   ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
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

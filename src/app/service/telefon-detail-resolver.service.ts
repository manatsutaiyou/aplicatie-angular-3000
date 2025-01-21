import { Injectable } from '@angular/core';
import { TelefonClass } from '../model/telefon-class';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { TelefonieService } from './telefonie.service';

@Injectable({
  providedIn: 'root'
})
export class TelefonDetailResolverService implements Resolve<TelefonClass> {
  constructor(private telefonieService: TelefonieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TelefonClass> {
    const telID = +route.params['ID'];
    return this.telefonieService.getTelefon(telID).pipe(
      catchError((error) => {
        console.error('Error fetching telefon details:', error);
        return of({
          ID: 0,
          name: 'Unknown',
          SellExc: 0,
          type: 'Unknown',
          pret: null,
          Anmodel: null,
          procesor: 'Unknown',
          memorie: 'Unknown',
          baterie: 'Unknown',
          image: undefined,
          display: 'Unknown',
          retele: [],
        });
      })
    );
  }
}

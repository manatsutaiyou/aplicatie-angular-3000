// Serviciul prin care sunt citite din data detaliile telefoanelor

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelefonieService {
  constructor(private http: HttpClient) {}

  getAllTelefoane(SellExc?: number): Observable<any[]> {
    return this.http.get<any[]>('data/telefoane.json').pipe(
      map((data: any[]) => {
        if (SellExc === undefined) {
          return data;
        }
        return data.filter(item => item.SellExc === SellExc);
      })
    );
  }
}

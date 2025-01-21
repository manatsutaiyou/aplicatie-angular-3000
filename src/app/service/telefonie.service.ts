// Serviciul prin care sunt citite din data detaliile telefoanelor

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TelefonClass } from '../model/telefon-class';

@Injectable({
  providedIn: 'root'
})
export class TelefonieService {
  constructor(private http: HttpClient) {}

  getTelefon(id: number): Observable<TelefonClass>{
    // return this.http.get<TelefonClass>('/api/telefon/${id}');
    return this.getAllTelefoane().pipe(
      map((telefoaneArray) => {
        const telefon = telefoaneArray.find((t) => t.ID === id);
        if (telefon) {
          return telefon;
        }
        return {
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
        };
      })
    );
  }
  
  getAllTelefoane(SellExc?: number): Observable<TelefonClass[]> {
    return this.http.get<any[]>('data/telefoane.json').pipe(
      map((data: any[]) => {
        const telefoaneArray: Array<TelefonClass> = [];
        const dejaPhone = localStorage.getItem('newPhone');
        if (dejaPhone) {
          const localPhones: TelefonClass[] = JSON.parse(dejaPhone);
          if (localPhones) {
            for (const id in localPhones) {
              if (Object.prototype.hasOwnProperty.call(localPhones, id)) {
                if (localPhones[id].SellExc === SellExc || SellExc === undefined) {
                  telefoaneArray.push(localPhones[id]);
                }
              }
            }
          }
        }
        for (const id in data) {
          if (Object.prototype.hasOwnProperty.call(data, id)) {
            if (data[id].SellExc === SellExc || SellExc === undefined) {
              telefoaneArray.push(data[id]);
            }
          }
        }
        return telefoaneArray;
      })
    );
    return this.http.get<TelefonClass[]>('data/telefoane.json')
  }
  // if (SellExc === undefined) {
        //   return data;
        // }
        // return data.filter(item => item.SellExc === SellExc);
addTelefon(telefon: TelefonClass){
  // le stochez intr-un array
  var newPhone: TelefonClass[] = [telefon];
  const dejaPhone = localStorage.getItem('newPhone');
    // verific daca mai exista cheia deja, daca da il adaug
  if (dejaPhone) {
    const parsedPhone: TelefonClass[] = JSON.parse(dejaPhone);
    // adaug nou telefon in acelasi array cu spread operator
      newPhone = [telefon, ...parsedPhone];
  }

  localStorage.setItem('newPhone', JSON.stringify(newPhone));
}

newTelID() {
  // creez o constanta si o variabila deoarece nu merge convertirea in numar aratata in tutorial
  const id = localStorage.getItem('ID'); 
  var newId : number;
  // daca exista sie ste numar, parse + 1
  if (id && !isNaN(Number(id))) {
    newId = parseInt(id, 10) + 1;
    localStorage.setItem('ID', String(newId));
  } else {
    // daca nu exista, il initializez cu 101
    newId=101;
  }
    localStorage.setItem('ID', newId.toString());
    return newId;
  }
}


//   // Retrieve the current TID from localStorage
//   const currentTID = localStorage.getItem('TID');

//   // If TID exists, increment it. Otherwise, set it to 1
//   const newTID = currentTID ? +currentTID + 1 : 1;

//   // Store the new TID back to localStorage
//   localStorage.setItem('TID', String(newTID));

//   // Return the new TID, ensuring it's a valid number (default to 0 if not valid)
//   return newTID;
// }



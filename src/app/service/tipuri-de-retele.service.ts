import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipuriDeReteleService {
  private reteleSource = new BehaviorSubject<string[]>([]); // Initial value is an empty array
  retele$ = this.reteleSource.asObservable();

constructor() { }

// updateRetele(selectedTypes: string[]): void {
//   this.reteleSource.next(selectedTypes);
// }

// }
}

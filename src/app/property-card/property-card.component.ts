// property (fiecare telefon in parte) tip any

import { Component, Input, input } from '@angular/core';
import { TelBasic } from '../model/tel-basic';
import { TelefonClass } from '../model/telefon-class';
import { ReteleEnum } from '../model/retele-enum.enum';

@Component({
  selector: 'app-property-card',
  standalone: false,
  
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
@Input() property : TelefonClass ={
  ID: 0,
  name: '',
  SellExc: 0,
  type: '',
  pret: null,
  Anmodel: null,
  procesor: '',
  memorie: '',
  baterie: '',
  image: undefined,
  display: '',
  retele: [],
//       addRetea:function (retea: ReteleEnum): void {
//         if (!this.retele.includes(retea)) {
//           this.retele.push(retea);
//         }
// }
}
@Input() hideIcons: boolean | undefined;
}

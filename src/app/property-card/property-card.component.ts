// property (fiecare telefon in parte) tip any

import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: false,
  
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
@Input() property : any ={

}
}

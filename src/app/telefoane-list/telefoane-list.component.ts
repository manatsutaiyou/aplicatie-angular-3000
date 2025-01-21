// declar un array list telefoane care apoi e populat din data

import { Component, OnInit } from '@angular/core';
import { TelefonieService } from '../service/telefonie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-telefoane-list',
  templateUrl: './telefoane-list.component.html',
  styleUrls: ['./telefoane-list.component.css'],
  standalone: false
})
export class TelefoaneListComponent implements OnInit {
  list_telefoane: any[] = [];

  constructor(
    private telefonieService: TelefonieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      const currentPath = urlSegments.map(segment => segment.path).join('/');
      if (currentPath === 'schimba_telefon') {
        this.loadTelefoane(2);
      } else if (currentPath === 'cumpara-telefon') {
        this.loadTelefoane(1);}
        else { this.loadTelefoane(); 
      }
     
    });
  }

  loadTelefoane(SellExc?: number): void {
    this.telefonieService.getAllTelefoane(SellExc).subscribe(
      data => {
        // afiseaza lista telefoanelor prin telefonie.service
        this.list_telefoane = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error)
      }
    )
    }
}

  //       const newTelefon = localStorage.getItem('New Phone');
  
  //       if (newTelefon !== null) {
  //         try {
  //           const parsedTelefon = JSON.parse(newTelefon);  
  
      
  //           if (SellExc === undefined || parsedTelefon.SellExc === SellExc) {
  //             this.list_telefoane = [parsedTelefon, ...this.list_telefoane];
  //           }
  //         } catch (error) {
  //           console.error('Error parsing the new phone data from localStorage:', error);
  //         }
  //       } else {
  //         console.log('No phone data found in localStorage');
  //       }
  //     },
  //     error => {
  //       console.error('Error loading telefoane:', error);
  //     }
  //   );
  // }
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
      if (currentPath === 'inchiriaza-telefon') {
        this.loadTelefoane(2); // Filter for SellRent: 2
      } else if (currentPath === 'cumpara-telefon') {
        this.loadTelefoane(1);} // Filter for SellRent: 2 
        else { this.loadTelefoane(); // Show all items
      }
     
    });
  }

  loadTelefoane(SellExc?: number): void {
    this.telefonieService.getAllTelefoane(SellExc).subscribe(
      data => {
        this.list_telefoane = data;
      },
      error => console.error('Error loading telefoane:', error)
    );
  }
}
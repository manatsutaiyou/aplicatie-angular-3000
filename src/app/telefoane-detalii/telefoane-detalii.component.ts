import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-telefoane-detalii',
  templateUrl: './telefoane-detalii.component.html',
  styleUrls: ['./telefoane-detalii.component.css'],
  standalone: false
})
export class TelefoaneDetaliiComponent implements OnInit {
  public telefonID!: number;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.telefonID= this.route.snapshot.params['ID'];
  }

}

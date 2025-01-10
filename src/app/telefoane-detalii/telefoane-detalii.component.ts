import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-telefoane-detalii',
  templateUrl: './telefoane-detalii.component.html',
  styleUrls: ['./telefoane-detalii.component.css'],
  standalone: false
})
export class TelefoaneDetaliiComponent implements OnInit {
  public telefonID!: number;
  constructor( private route: ActivatedRoute, private router :Router) { }

  ngOnInit() {
    this.telefonID= Number(this.route.snapshot.params['ID']);
    this.route.params.subscribe(
      (params)=> {
        this.telefonID= +params['ID'];
      }
    )
  }
  onSelectNext(){
    this.telefonID += 1;
    this.router.navigate(['telefoane-detalii', this.telefonID]);
  }
}

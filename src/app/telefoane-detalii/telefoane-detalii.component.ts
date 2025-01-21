import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefonieService } from '../service/telefonie.service';
import { TelefonClass } from '../model/telefon-class';
@Component({
  selector: 'app-telefoane-detalii',
  templateUrl: './telefoane-detalii.component.html',
  styleUrls: ['./telefoane-detalii.component.css'],
  standalone: false
})
export class TelefoaneDetaliiComponent implements OnInit {
  public telefonID: any;

  property = new TelefonClass();
  constructor( private route: ActivatedRoute,
               private router :Router,
               private telefonieService: TelefonieService) { }

  ngOnInit() {
    this.telefonID = Number(this.route.snapshot.params['ID']);
    this.route.data.subscribe((data) => {
      this.property = data['prp']; // This is provided by the resolver
      
    });
    // this.route.params.subscribe(
    //   (params)=> {
    //     this.telefonID= +params['ID'];
    //     this.telefonieService.getTelefon(this.telefonID).subscribe(
    //       (data:TelefonClass)  => {
    //         this.property = data;
    //       }
    //     )
    //   }
    // )
  }
  onSelectNext(){
    this.telefonID += 1;
    this.router.navigate(['telefoane-detalii', this.telefonID]);
  }
}

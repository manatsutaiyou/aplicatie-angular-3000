// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TelefonieService } from '../service/telefonie.service';

@Component({
  selector: 'app-property-list',
  standalone: false,
  
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  list_properties: any;
  
  constructor(private TelefonieService: TelefonieService) {}

  ngOnInit(): void {
    this.TelefonieService.getAllProperties().subscribe(
      data=>{
        this.list_properties=data;
      console.log(data);
    }
    )
  }
}

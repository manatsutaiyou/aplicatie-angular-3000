import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: false
})

export class NavBarComponent implements OnInit {
  loggedinUser: any;

constructor(private alertify: AlertifyService) {}

ngOnInit(): void {
}

loggedin() {
  this.loggedinUser = localStorage.getItem('token');
  return this.loggedinUser;
  
}

onLogout() {
  localStorage.removeItem('token');
  this.alertify.success('Te-ai deconectat cu succes!');
}
}

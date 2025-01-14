import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificareService } from '../../service/autentificare.service';
import { AlertifyService } from '../../service/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  standalone: false
})
export class UserLoginComponent implements OnInit {


  constructor(private loginService: AutentificareService,
              private alertify : AlertifyService,
              private router: Router
  ) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm) {
  console.log(loginForm.value);
  const token = this.loginService.loginUser(loginForm.value)
  if (token) {
    localStorage.setItem('token', token.userName)
    this.alertify.success('Autentificarea a avut succes!');
    this.router.navigate(['/']);
  } else {
    this.alertify.error('User/Parola nu se potrivesc...');
  }
  }
}

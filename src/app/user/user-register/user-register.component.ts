import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, EmailValidator, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../model/user';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../../service/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  standalone: false
})
export class UserRegisterComponent implements OnInit {
  // declar registration form cu clasa formgroup care grupeaza toate form control
  registrationForm!: FormGroup;
  fb: any;
  // am definit user ca interfata User din  modele user.ts
  user!: User;
  userSubmitted: boolean = false;
onBack() {
  this.router.navigate(['/']);
}
// functie pentru mesajul de eroare cand numele nu este valid
get userName(){
  return this.registrationForm.get('userName') as FormControl;
}
// functii pt fiecare mesaj de eroare in parte
get email(){
  return this.registrationForm.get('email') as FormControl;
}
get password(){
  return this.registrationForm.get('password') as FormControl;
}
get confirm_password(){
  return this.registrationForm.get('confirm_password') as FormControl;
}

onSubmit(){
  console.log('registration ok ');
  console.log(this.registrationForm);
  this.userSubmitted= true;
  if(this.registrationForm.valid){
  // pentru a stoca in spatiul local - vezi user service service - si pt a a afisa erori daca datele nu sunt valide la submit, respectiv a le reseta daca sunt ok si s au adaugat
    // this.user = Object.assign(this.user, this.registrationForm.value)
    this.userService.addMultipleUsers(this.userData());
    this.registrationForm.reset();
    this.userSubmitted= false;
    // VEZI ALERTIFY SERVICE - AM FACUT WRAP LA NISTE FUNCTII ACOLO CA SA LE PUTEM REFOLOSI-  AM ADAUGAT IN CONSTRUCTOR SERVICIUL, IMPORTUL NU MAI E NECESAR alertify.notify( message, 'success', [wait, callback]);
    this.alertify.success('Te-ai inregistrat cu succes');
  } else {
     // alertify.notify( message, 'error', [wait, callback]);
    this.alertify.error('Inregistrarea a esuat. Va rugam sa introduceti date valide.');
  }
}
userData(): User{
  return this.user={
    userName:this.userName.value,
    email:this.email.value,
    password:this.password.value,
    confirm_password:this.password.value
  }
}
  constructor(private router : Router, 
    private userService: UserServiceService, 
    fb: FormBuilder,
    private alertify: AlertifyService) { }
// Reactive form - controale de validare pentru fiecare formcontrolname din inputurile din html
  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email : new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl (null, [Validators.required]),
    }, { validators: this.passwordMatchingValidator});
    // this.createRegistrationForm();
  } 
  // createRegistrationForm(){
  //   this.registrationForm = this.fb.group({
  //     userName:[null, Validators.required],
  //     email:[null, Validators.required, Validators.email],
  //     password:[null, Validators.required, Validators.minLength(8)],
  //     confirm_password:[null, Validators.required]

  //   },{validators: this.passwordMatchingValidator})
  // }
  // Cross validation- valideaza across the board, in randul 30, custom validator
  //aici este o functie care valideaza daca cele 2 parole corespund
  passwordMatchingValidator: ValidatorFn = (fg: AbstractControl): ValidationErrors| null => {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirm_password')?.value;
  
    return password === confirmPassword ? null : { notMatching: true };
  };
 
}

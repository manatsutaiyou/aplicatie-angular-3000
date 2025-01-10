import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  standalone: false
})
export class UserRegisterComponent implements OnInit {
  // declar registration form cu clasa formgroup care grupeaza toate form control
registrationForm!: FormGroup;
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
}

  constructor(private router : Router) { }
// Reactive form - controale de validare pentru fiecare formcontrolname din inputurile din html
  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email : new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl (null, [Validators.required]),
    }, { validators: this.passwordMatchingValidator});
    
  } 
  // Cross validation- valideaza across the board, in randul 30, custom validator
  //aici este o functie care valideaza daca cele 2 parole corespund
  passwordMatchingValidator: ValidatorFn = (fg: AbstractControl): ValidationErrors| null => {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirm_password')?.value;
  
    return password === confirmPassword ? null : { notMatching: true };
  };
 
}

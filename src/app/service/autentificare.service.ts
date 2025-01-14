import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificareService {

constructor() { }

loginUser(user: any ){
let UserArray=[];
const storedUsers = localStorage.getItem('Users');
if (storedUsers) {
  // Parse the stored users if the data exists
  UserArray = JSON.parse(storedUsers);
}
  return UserArray.find((par: { userName: any; password: any; }) => par.userName === user.userName && par.password === user.password) 
}
}

import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addMultipleUsers(user: User) {
  let users = [];

  // caut userul in local storage
  const existingUsers = localStorage.getItem('Users');
  
  if (existingUsers) {
    // daca da, parse user in array
    users = JSON.parse(existingUsers);
  } else {
    users=[user];
  }

  users.push(user);

  // Save the updated array back to localStorage
  localStorage.setItem('Users', JSON.stringify(users));

  console.log('Users array saved to localStorage:', users);
}

}

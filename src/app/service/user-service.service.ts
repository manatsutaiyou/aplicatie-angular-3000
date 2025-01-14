import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addMultipleUsers(user: User) {
  let users = [];

  // Check if 'Users' already exists in localStorage
  const existingUsers = localStorage.getItem('Users');
  
  if (existingUsers) {
    // If it exists, parse the data into an array
    users = JSON.parse(existingUsers);
  } else {
    users=[user];
  }

  // Push the new user into the array
  users.push(user);

  // Save the updated array back to localStorage
  localStorage.setItem('Users', JSON.stringify(users));

  console.log('Users array saved to localStorage:', users);
}

}

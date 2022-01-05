import { Injectable } from '@angular/core';
import { User } from '../shared/model/user';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const USER_KEY = 'Customer';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
   constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): any {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveUser(customer: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,customer);
  }
  public getUser() {
    let user=window.sessionStorage.getItem(USER_KEY);
    if(user!=null){
      return JSON.parse(user);
    }
    return null;
   
   }
 

 
  

 
}
  
 
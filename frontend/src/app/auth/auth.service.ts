import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  private loginUrl = 'http://localhost:8000/api/auth/login';
  private profileUrl = 'http://localhost:8000/api/auth/me';
  private signupUrl = 'http://localhost:8000/api/auth/register';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {



  }

  attemptAuth(credentials: AuthLoginInfo):  Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  fetchUser(): Observable<any> {
    return this.http.get<JwtResponse>(this.profileUrl, {
      headers : {
        Authorization : 'Bearer ' + this.tokenStorageService.getToken()
      }
    });
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    
  }
  isLoggedIn(){

    let token = sessionStorage.getItem("AuthToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
}

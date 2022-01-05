import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
}) 
export class SahreDataService {

  private isLoggedInSubject = new BehaviorSubject(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor() { }

  setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn)
  }

}
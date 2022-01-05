import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SahreDataService } from '../../services/data/share-data-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {
  isShowen= false ; // hidden by default
  subscriptionLoggedIn: Subscription;
  isLoggedIn : Boolean ;
  
  toggleShow() {
    this.isShowen = ! this.isShowen;
  }
dataCart:any;
  constructor(
    private authService:AuthService,
    private router :Router,
    private shareDataService: SahreDataService,
     
    ) { 
      this.subscriptionLoggedIn = this.shareDataService.isLoggedIn.subscribe(data => {
        this.isLoggedIn = data;
      })
    }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(){
    sessionStorage.removeItem("AuthToken");
    this.isLoggedIn = this.authService.isLoggedIn();
    this.router.navigate(['/login']);
  }
  ngOnDestroy() {
    this.subscriptionLoggedIn.unsubscribe();
  }

}
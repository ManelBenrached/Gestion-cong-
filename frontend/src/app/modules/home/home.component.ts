import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Demande } from 'src/app/shared/model/demande';
import { User } from 'src/app/shared/model/user';
import { DemandeService } from 'src/app/shared/services/demande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   demandes: Array<any>=[];
  data:any;
  public user:User;
  public isAdmin=false;
  public isAnnuler=false;
  public isencours=false;
  public stat :any;

   constructor(
     private tokenStorage: TokenStorageService,
     private router: Router,
     private demandeService: DemandeService) {}
    
 
   ngOnInit() {
 this.stat='aaaa';
     this.user= this.tokenStorage.getUser();
     //console.log(this.user.role);
     if(this.user.role=='admin'){

      this.isAdmin = true;
      this.getdemandes();
   
}

else{
this.getdemandeuser();
}
}
 
getdemandes(): void {
   this.demandeService.getdemandes()
    .subscribe(
      data => {
        this.demandes = data.data;
    
        if(data.status='en cours'){
          this.isencours = true;
        }
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
getdemandeuser(): void {
  this.demandeService.getuserdemande()
   .subscribe(
     data => {
       this.demandes = data.data;
       console.log(data);
     },
     error => {
       console.log(error);
     });
}
 
}
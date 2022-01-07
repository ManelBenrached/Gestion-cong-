import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stat } from 'fs';
import { element } from 'protractor';
import { BehaviorSubject, pipe } from 'rxjs';
import { find, first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Demande } from 'src/app/shared/model/demande';
import { User } from 'src/app/shared/model/user';
import { DemandeService } from 'src/app/shared/services/demande.service';
@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  demandes: Array<any>=[];
  data:any;
  public user:User;
  public isencours=false;
  public isaccept= false;
  public isrefus= false;
  public isAdmin= false;
  public form!: FormGroup;
  isLoggedIn : Boolean ;

  stat:any; 
  
   constructor(
    private authService:AuthService,
     private tokenStorage: TokenStorageService,
     private router: Router,
     private demandeService: DemandeService) {}
    
 
   ngOnInit() { 
  
      
     this.user= this.tokenStorage.getUser();
     //console.log(this.user.role);
     if(this.user.role=='admin'){

       this.isAdmin = true;
       
      this.getdemandes();
      this.demandes.forEach((value) => {  
        
        console.log(value); 
        if( value='en cours'){
        
          this.isaccept = true;  
         }
        
          
      

      });
   

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

        },

      error => {
        console.log(error);
      });
}
status:'accepter';

Accepter() {
     
let token = sessionStorage.getItem("AuthToken");
  let status='accepter';
  
   this.demandeService.acceptedemande(status).pipe(first()).subscribe((data) => {
    console.log(data);
     
    console.log('Data is received - Result - ', data);
 
  })
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
     }
     
     );
}
 
}
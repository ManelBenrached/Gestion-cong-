import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
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
  public isencours=false;
  public isaccept=false;
  public isrefus=false;


  public stat :any;
  public  elmnt :any;
 

   constructor(
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
          this.isencours = true;

          console.log(  this.isencours);
         }
         if( value='accepte'){
          this.isaccept = true; 
         }
         if( value='refuser'){
          this.isrefus = true; 
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
    
     
        console.log(data);
       
        },

      error => {
        console.log(error);
      });
}

Accepter() {
  this.demandeService.changestatus(Demande).subscribe((results) => {
    console.log('Data is received - Result - ', results);
    this.data = results.results;
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

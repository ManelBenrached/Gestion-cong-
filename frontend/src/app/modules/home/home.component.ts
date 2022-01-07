import { Component, OnInit } from '@angular/core'; 
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user:User;
  isDisable : Boolean ;
  adminpart: any;
  click : boolean = true;

  constructor(private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    this.user= this.tokenStorage.getUser();
    if(this.user.role=='User'){
      this.isDisable=true;
      
     }

}
onKey(event: KeyboardEvent) { 
  // if value is not empty the set click to false otherwise true
  this.click = (event.target as HTMLInputElement).value === '' ? true:false;
}
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLoginInfo } from 'src/app/auth/login-info';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { SahreDataService } from 'src/app/shared/services/data/share-data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  public loginInfo = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private shareDataService: SahreDataService,
    ) {
  }


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(f: NgForm) {
    console.log(this.form);
    if (f.invalid) {
      return;
    }

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.access_token);
          this.tokenStorage.saveUser(JSON.stringify(data.user));
      
        this.isLoggedIn = true;
        this.shareDataService.setLoggedIn(this.isLoggedIn);
       
        this.router.navigate(['/']);
      });
  }

}

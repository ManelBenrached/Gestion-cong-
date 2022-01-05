import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/auth/AlertService';
import { AuthService } from 'src/app/auth/auth.service';
import { SignUpInfo } from 'src/app/auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService:AuthService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          role: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          repassword: ['',Validators.required ]
      });
  }


  
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {

    
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.authService.signUp(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
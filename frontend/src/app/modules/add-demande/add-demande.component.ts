import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/auth/AlertService';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { User } from 'src/app/shared/model/user';
import { DemandeService } from 'src/app/shared/services/demande.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {

  form!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    loading = false;
    submitted = false;
    public user:User;

    constructor(
     private demandeService: DemandeService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router, 
        private alertService: AlertService,
        
     private tokenStorage: TokenStorageService,
    ) {}

    ngOnInit() {
      this.user= this.tokenStorage.getUser();
         
        this.form = this.formBuilder.group({
            type: ['', Validators.required],
            start_at: ['', Validators.required],
            end_at: ['', Validators.required],
            description: ['', Validators.required],
            user_id: [this.user.id, Validators.required],
         });
      
        
    }
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        //this.createconge();
        if (this.form.invalid) {
            return;
        }

        this.loading = true; 
          this.demandeService.addconge(this.form.value)
   .pipe(first())
   .subscribe(() => {
       this.alertService.success('demande added successfully', { keepAfterRouteChange: true });
       this.router.navigate(['../'], { relativeTo: this.route });
   })
   .add(() => this.loading = false);
}   
 
      
} 


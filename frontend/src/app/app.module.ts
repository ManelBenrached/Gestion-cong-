import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/register/register.component';
import { BasicAuthInterceptor } from './shared/providers/basic.auth.interceptor';
import { AccountComponent } from './modules/account/account.component';
 // For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
 import { AddDemandeComponent } from './modules/add-demande/add-demande.component';
 import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AccountComponent,
    AddDemandeComponent
     
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NavbarModule,
    MatIconModule,
    ButtonsModule,
    WavesModule,
     
     
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

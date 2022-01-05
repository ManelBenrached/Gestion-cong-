import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';

import { HomeRoutingModule } from './home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MDBRootModule } from 'angular-bootstrap-md'; 
 
 
@NgModule({
  declarations: [
    HomeComponent,
   ],
  imports: [
    NgbModule,
    MDBRootModule,
     IvyCarouselModule,
     MatSliderModule,
    CommonModule,
    HomeRoutingModule,
    
    
  ],
  exports:[
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }

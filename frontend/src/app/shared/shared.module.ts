import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './components/header/header.component';
 import { RouterModule } from '@angular/router';
 
import {MatToolbarModule} from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
  
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
     
    ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule

  ],
  exports: [
    HeaderComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }

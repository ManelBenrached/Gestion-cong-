import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDemandeRoutingModule } from './list-demande-routing.module';
import { ListDemandeComponent } from './list-demande.component';


@NgModule({
  declarations: [ListDemandeComponent],
  imports: [
    CommonModule,
    ListDemandeRoutingModule
  ]
})
export class ListDemandeModule { }

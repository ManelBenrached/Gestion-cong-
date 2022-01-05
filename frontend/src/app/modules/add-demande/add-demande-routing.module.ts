import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemandeComponent } from './add-demande.component';

const routes: Routes = [  {
  path: '',
  component:AddDemandeComponent
},
  {
    path:'',
    redirectTo: '/add',
  
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDemandeRoutingModule { }

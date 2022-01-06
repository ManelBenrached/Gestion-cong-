import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemandeComponent } from './list-demande.component';

const routes: Routes = [{
  path: '',
  component:ListDemandeComponent
},
  {
    path:'',
    redirectTo: '/demandes',
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDemandeRoutingModule { }

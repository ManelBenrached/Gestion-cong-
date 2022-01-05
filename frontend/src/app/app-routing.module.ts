import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
 import { AddDemandeComponent } from './modules/add-demande/add-demande.component';
import { AddDemandeModule } from './modules/add-demande/add-demande.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
const routes: Routes = [

  {
    path: '',
    loadChildren: () => HomeModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'register'  ,
    loadChildren: () => RegisterModule 
   },
   {
    path: 'addDmande'  ,
    loadChildren: () => AddDemandeModule 
   },
   
  {
    path: 'add',
    component:AddDemandeComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

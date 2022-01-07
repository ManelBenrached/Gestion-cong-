import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
 import { AddDemandeComponent } from './modules/add-demande/add-demande.component';
import { AddDemandeModule } from './modules/add-demande/add-demande.module';
import { HomeModule } from './modules/home/home.module';
import { ListDemandeModule } from './modules/list-demande/list-demande.module';
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
    path: 'add'  ,
    loadChildren: () => AddDemandeModule 
   },
   
  {
    path: 'demandes',
    loadChildren: () => ListDemandeModule 
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

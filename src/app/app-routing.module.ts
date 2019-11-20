import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { PayeeAddComponent } from './payee-add/payee-add.component';  
import { PayeeEditComponent } from './payee-edit/payee-edit.component';  
import { PayeeGetComponent } from './payee-get/payee-get.component';  
const routes: Routes = [  
  {  
    path: 'payee/create',  
    component: PayeeAddComponent  
  },  
  {  
    path: 'edit/:id',  
    component: PayeeEditComponent  
  },  
  {  
    path: 'payees',  
    component: PayeeGetComponent  
  }  
];  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";


const routes: Routes = [
  {
    path :'listCustomer',
    component :CustomerComponent
  },
  {
    path:'create/customer',
    component:CreateCustomerComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

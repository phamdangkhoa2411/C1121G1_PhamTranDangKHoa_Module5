import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {HomeComponent} from "./home/home.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {ListFacilityComponent} from "./service/list-facility/list-facility.component";
import {EditServiceComponent} from "./service/edit-service/edit-service.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'customer/list', component: ListCustomerComponent
  },
  {
    path: 'customer/edit/:id', component: EditCustomerComponent
  },
  {
    path: 'customer/create', component: CreateCustomerComponent
  },
  {
    path: 'customer/delete/:id', component: ListCustomerComponent
  },
  {
    path: 'contract/list', component: ListContractComponent
  },
  {
    path: 'contract/create', component: CreateContractComponent
  },
  {
    path: 'service/list', component: ListFacilityComponent,
  },
  {
    path: 'service/edit', component: EditServiceComponent,
  },
  {
    path: 'service/create', component: CreateServiceComponent,
  },

  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(module => module.ServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

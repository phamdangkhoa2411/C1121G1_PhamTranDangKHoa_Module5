import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListContractComponent} from "../contract/list-contract/list-contract.component";
import {ListFacilityComponent} from "./list-facility/list-facility.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";


const routes: Routes = [
  {
    path: 'list',
    component: ListFacilityComponent
  },
  {
    path: 'create',
    component: CreateServiceComponent
  },
  {
    path: 'edit/:id',
    component: EditServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }

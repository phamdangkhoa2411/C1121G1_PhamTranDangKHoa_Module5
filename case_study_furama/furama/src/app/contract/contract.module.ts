import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListContractComponent} from './list-contract/list-contract.component';
import {AddContractComponent} from './add-contract/add-contract.component';
import {UpdateContractComponent} from './update-contract/update-contract.component';


const contractRouter: Routes = [
  {
    path : '' , component : ListContractComponent
  },
  {
    path : 'addContract' , component : AddContractComponent
  },
  {
    path : 'updateContract' , component : UpdateContractComponent
  }
];

@NgModule({
  declarations: [
    ListContractComponent,
    AddContractComponent,
    UpdateContractComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contractRouter)
  ]
})
export class ContractModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {ToastrModule} from 'ngx-toastr';
// @ts-ignore
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';



const customerRoutes:Routes=[
  {
    path : "" , component: ListCustomerComponent
  },
  {
    path : "addCustomer" , component: AddCustomerComponent
  },
  {
    path : "updateCustomer/:id" , component: UpdateCustomerComponent
  },
  {
    path : "deleteCustomer/:id" , component: DeleteCustomerComponent
  },
];
@NgModule({
  declarations: [
    ListCustomerComponent,
    UpdateCustomerComponent,
    AddCustomerComponent,
    DeleteCustomerComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,

  ]
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import {HttpParams} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';


const employeeRouter:Routes=[
  {
    path : '', component: ListEmployeeComponent
  },
  {
    path : 'addEmployee', component: AddEmployeeComponent
  },
  {
    path : 'updateEmployee/:id', component: UpdateEmployeeComponent
  },
  {
    path : 'delete/:id', component: DeleteEmployeeComponent
  },

]




@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRouter),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    FormsModule,
    NgxPaginationModule,


  ]
})
export class EmployeeModule { }

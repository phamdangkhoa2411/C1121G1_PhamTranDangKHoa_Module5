import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListServiceComponent} from './list-service/list-service.component';
import {UpdateServiceComponent} from './update-service/update-service.component';
import {AddServiceComponent} from './add-service/add-service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';


const serviceRoute: Routes = [
  {
    path: '', component: ListServiceComponent
  },
  {
    path: 'addService', component: AddServiceComponent
  },
  {
    path: 'updateService/:id', component: UpdateServiceComponent
  },
];


@NgModule({
  declarations: [
    ListServiceComponent,
    UpdateServiceComponent,
    AddServiceComponent,
    DeleteServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoute),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule
  ]
})
export class ServiceModule {
}

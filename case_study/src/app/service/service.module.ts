import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import {ListServiceComponent} from "./list-service/list-service.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";
import {ListFacilityComponent} from "./list-facility/list-facility.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListServiceComponent,
    CreateServiceComponent,
    EditServiceComponent,
    ListFacilityComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ServiceModule { }

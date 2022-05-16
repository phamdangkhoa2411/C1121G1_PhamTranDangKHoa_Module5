import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }

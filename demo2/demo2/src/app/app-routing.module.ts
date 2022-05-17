import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductComponent} from "./product/product.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


const routes: Routes = [
  {
    path: 'list',
    component: ProductComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  // {
  //   path: 'delete/:id',
  //   // component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

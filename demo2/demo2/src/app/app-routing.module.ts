import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  {
    path: 'list',
    component: ProductComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  },
  // {
  //   path: 'edit/:id',
  //   // component: ProductEditComponent
  // }, {
  //   path: 'delete/:id',
  //   // component: ProductDeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

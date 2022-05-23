import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaiVietComponent} from "./bai-viet/bai-viet.component";
import {CreateComponent} from "./create/create.component";


const routes: Routes = [
  {
    path: 'list',
    component: BaiVietComponent
  },
  {
    path:'create',
  component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

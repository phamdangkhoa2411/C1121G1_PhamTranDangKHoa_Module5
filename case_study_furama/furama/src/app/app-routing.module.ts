import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddHomeComponent} from './add-home/add-home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addHome', component: AddHomeComponent},
  {path: '', component: HomeComponent},


  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },

  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },


  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },


  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(module => module.ServiceModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

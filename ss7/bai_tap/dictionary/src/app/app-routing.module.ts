import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryListComponent} from "./dictionary-list/dictionary-list.component";
import {TranslateComponent} from "./translate/translate.component";


// @ts-ignore
const routes: Routes = [
  {
    path : 'dictionary',
  component:DictionaryListComponent,
    children : [{
      path: ':word',
      component : TranslateComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

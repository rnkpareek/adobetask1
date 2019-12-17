import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import {Task1Component} from './task1.component'
import {MykartComponent} from './mykart/mykart.component';
import {ShopinghomeComponent} from './shopinghome/shopinghome.component';
const routes: Routes = [
    { path: '', 
    redirectTo: 'Home', pathMatch: 'full' }, 
    { path: 'Home', component: ShopinghomeComponent},
      { path: 'mykart', component: MykartComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task1RoutingModule { }

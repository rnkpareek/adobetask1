import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import {AppComponent} from './app.component';
const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  {
    path: 'task1',
    loadChildren: './task1/task1.module#Task1Module',
  },
  {
    path: 'task2',
    loadChildren: './task2/task2.module#Task2Module',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import {Task2RoutingModule} from './task2-routing'


@NgModule({
  declarations: [Task2Component],
  imports: [
    CommonModule,
    Task2RoutingModule
  ]
})
export class Task2Module { }

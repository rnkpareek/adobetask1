import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import {Task2RoutingModule} from './task2-routing'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import "rxjs/Rx";
@NgModule({
  declarations: [Task2Component],
  imports: [
    CommonModule,
    Task2RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Task2Module { }

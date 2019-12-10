import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1.component';
import {Task1RoutingModule} from './task1-routing'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Task1Component],
  imports: [
    CommonModule,
    Task1RoutingModule,
    HttpClientModule
  ]
})
export class Task1Module { }

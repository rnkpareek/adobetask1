import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Task1Service {
    private getKart_URL="https://api.myjson.com/bins/qhnfp"

  constructor(private http: HttpClient) {

  }
 
  getShoppingData() {
    return this.http.get(this.getKart_URL);
  }
  
 
  
}

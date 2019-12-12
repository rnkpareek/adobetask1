import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class Task1Service {
    private messageSource = new BehaviorSubject<any>(0);
        currentMessage = this.messageSource.asObservable();
    private getKart_URL="https://api.myjson.com/bins/qhnfp"

  constructor(private http: HttpClient) {

  }
 
  getShoppingData() {
    return this.http.get(this.getKart_URL);
  }
  
   changeCount(message: any) {
      this.messageSource.next(message)
    }
  
}

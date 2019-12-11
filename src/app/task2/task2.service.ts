import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Task2Service {
  private searchSource = new BehaviorSubject('');
  SearchArea = this.searchSource.asObservable();
    
  constructor(private http: HttpClient) {

  }
 
  getSearchData(val) {
    return this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=${val}`);
  }

  
}

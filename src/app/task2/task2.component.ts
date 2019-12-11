import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import {Task2Service} from './task2.service';
import { Subscription } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import "rxjs/Rx";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  searchQueryControl = new FormControl();
  formCtrlSearch: Subscription;
  searchText: any;
  searchData:any[]= [];
  searchdaata: any[] = [];
  dataNotFound: boolean;
  showData = false;
  or = true;
  message: string="";
  currentUrl = '';
  SearchValue = '';
  constructor(private task2Service:Task2Service,
    private router: Router) { }

  ngOnInit() {
    console.log("---conpo2----------->")
    console.log('iam search query called again');
    this.message="";
    this.currentUrl = this.router.url;
    this.task2Service.SearchArea.subscribe(message => this.message = message);
    console.log('the value search is here', this.message);
    this.formCtrlSearch = this.searchQueryControl.valueChanges.debounceTime(500).subscribe(newValue => {
      this.searchText = newValue;
      console.log('on chnage>', this.searchText);
      if (this.searchText.length > 2) {
        this.onSearch(this.searchText);
      } else {
        console.log('less value ');
        this.searchData = [];
      }
    }, error => {
      if (error.status === 500 || error.status === 404) {
        // this.openDialog();
      }
    });
  }
 
  onSearch(ev: any) {
    if (!ev) {
      return;
    }

    this.task2Service.getSearchData(ev).subscribe(
      res => {
        console.log("==============>",res.hasOwnProperty('statuses'))
        console.log("==============>",typeof res)
        for (var key in res) {
          if (res.hasOwnProperty('statuses')) {
            console.log(key + " -> " + res['statuses']);
            this.searchData=res['statuses']
           
        }
        }
        if(this.searchData.length>0){
          this.dataNotFound=true;
        }else{
          this.dataNotFound=false;
        }
        console.log("==============>",this.searchData)
      }, error => {
        if (error.status === 500 || error.status === 404) {
          // this.openDialog();
          console.log("err")
        }
      }
    );
  }
  searchQuery() {
    // if (this.currentUrl === '/dashboard/SubDashboard' && this.searchText.length > 2) {
    //   this.router.navigate(['/dashboard/faq-Queries']);
    //   this.newMessage();
    // } else if (this.searchText.length > 2) {
    //   console.log('nothing sorry');
    //   this.newMessage();
    // }
  }
}

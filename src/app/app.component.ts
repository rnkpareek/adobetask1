import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public router: Router, ) {
    
  }
  home(){
    this.router.navigateByUrl('/');
  }
  task1(){
    console.log("-------->")
    this.router.navigateByUrl('/task1');
  }
  task2(){
    console.log("-------->")
    this.router.navigateByUrl('/task2');
  }

}

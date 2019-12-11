import { Component, OnInit } from '@angular/core';
import {Task1Service} from './task1.service'
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor(private Task1service:Task1Service) { }
shoppingData:any;
KartAdded=[]
  ngOnInit() {
    console.log("--------------copooo>")
    this.getKartData();
  }
  getKartData(){
    
    this.Task1service.getShoppingData().subscribe((res)=>{
     console.log("----------->data",res)
     this.shoppingData=res;
    })
  }
  addToKart(value){
  this.KartAdded.push(value);
  }

  myKart(){
    
  }

}

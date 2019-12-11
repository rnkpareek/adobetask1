import { Component, OnInit } from '@angular/core';
import {Task1Service} from '../task1.service';
@Component({
  selector: 'app-shopinghome',
  templateUrl: './shopinghome.component.html',
  styleUrls: ['./shopinghome.component.css']
})
export class ShopinghomeComponent implements OnInit {

  constructor(private Task1service:Task1Service) { }
  shoppingData:any;
  KartAdded=[]
  ngOnInit() {
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

}

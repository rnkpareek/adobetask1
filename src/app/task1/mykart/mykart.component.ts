import { Component, OnInit } from '@angular/core';
import {Task1Service} from '../task1.service';
@Component({
  selector: 'app-mykart',
  templateUrl: './mykart.component.html',
  styleUrls: ['./mykart.component.css']
})
export class MykartComponent implements OnInit {
  message:any;
  selectedData=[];
  Total:number=0;
  constructor(private task1Service: Task1Service) { }

  ngOnInit() {
   var data= this.task1Service.currentMessage.subscribe(message => this.message = message)
   this.selectedData=this.message;
  if(this.selectedData.length>0){
    this.getTotal();
  }
  
  
  }

  getTotal(){
     this.Total=this.selectedData.reduce((accumulator, currentValue)=> {
      return accumulator + currentValue.net
     },0 )
     console.log("---->",this.Total)
  }
  remove(id){
    this.selectedData = this.selectedData.filter(function( obj ) {
      return obj.id !== id;
    });
    this.getTotal();
  }

}

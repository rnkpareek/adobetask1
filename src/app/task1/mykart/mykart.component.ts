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
  constructor(private task1Service: Task1Service) { }

  ngOnInit() {
   var data= this.task1Service.currentMessage.subscribe(message => this.message = message)
   this.selectedData.push(this.message);
   console.log("-------->",this.selectedData)
  }

}

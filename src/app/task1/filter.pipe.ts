import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    for(var i=0;i<=value.length-1;i++){
      console.log("------->",value[i])
       let discount = value[i].price * (value[i].discount / 100)
       let net = value[i].price - discount
       value[i].net=net;
    }
    return value;
  }

}

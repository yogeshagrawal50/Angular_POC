import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, type: any): any { // [1, 2, 3, 4]
    value.sort((a:any, b:any)=>{
      if(type === 'asc'){
        if(a.product_name < b.product_name){
          return -1;
        }else if(a.product_name > b.product_name){
          return 1;
        }else{
          return 0;
        }
      }else if (type === 'desc'){
        if(a.product_name > b.product_name){
          return -1;
        }else if(a.product_name < b.product_name){
          return 1;
        }else{
          return 0;
        }
      }else if (type === 'lth'){
        if(a.product_price < b.product_price){
          return -1;
        }else if(a.product_price > b.product_price){
          return 1;
        }else{
          return 0;
        }
      }else{
        if(a.product_price > b.product_price){
          return -1;
        }else if(a.product_price < b.product_price){
          return 1;
        }else{
          return 0;
        }
      }
    })
    return value;
  }

}

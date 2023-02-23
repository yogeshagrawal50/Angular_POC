import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter((search:any)=>{//[1,2,3,4]
        return search.product_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}

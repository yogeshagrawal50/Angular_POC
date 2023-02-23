import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorthand'
})
export class ShorthandPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 4);
  }

}

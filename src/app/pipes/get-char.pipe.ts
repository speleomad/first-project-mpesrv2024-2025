import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: unknown, ...position: unknown[]): unknown {
    if (typeof position[0] === 'number' && typeof value === 'string') {
      if (position[0] && position[0] < value.length) {
        return value.charAt(position[0]);
      } else
        return value.charAt(0);
    } else return "";
  }


}

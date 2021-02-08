import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'penznem'
})
export class PenznemPipe implements PipeTransform {
 
  transform(value: number): string {
    return `${value.toString().split('').map((item,index) => (value.toString().length - index - 1) % 3 === 0 ? `${item} ` : `${item}`).join('')} Ft`;
  }
}

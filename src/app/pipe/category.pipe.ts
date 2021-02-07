import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], what: any, key: string = ''): any[] {
    if (!Array.isArray(value) || !what || !key) {
      return value;
    }
    return value.filter(item => item[key] === what);
  }
}

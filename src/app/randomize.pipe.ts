import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(prodList: Product[]): Product[] {
    if (!Array.isArray(prodList)) {
      return prodList;
    }
    return prodList.sort(() => 0.5 - Math.random());
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(prodList: Product[]): Product[] {
    if (!Array.isArray(prodList)) {
      return prodList;
    }
    return prodList.filter(item => item.featured);
  }

}

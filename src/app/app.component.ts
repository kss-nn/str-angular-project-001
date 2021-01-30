import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';

  prodList: Product[] = this.productService.list;

  constructor(
      private productService: ProductService,
  ) {}
}

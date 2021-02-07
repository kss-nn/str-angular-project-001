import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-turner',
  templateUrl: './product-turner.component.html',
  styleUrls: ['./product-turner.component.scss']
})
export class ProductTurnerComponent implements OnInit {

  //@Input() prods: Product[] = [];
  @Input() prods: Observable<Product[]>;

  constructor(

) {}

  ngOnInit(): void {
  }


}

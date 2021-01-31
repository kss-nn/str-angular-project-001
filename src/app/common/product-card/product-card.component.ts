import { Product } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
//   - Működése: input tulajdonságként kapja meg a megjelenített terméket, 
// pld: `<app-product-card [product]="product"></app-product-card>`
// - Statikus komponens, azaz nem kell bele output tulajdonság (egyenlőre :)))) -->
  @Input() product: Product=new Product();
  
 constructor(){
  
}
 

  ngOnInit(): void {
  }

}

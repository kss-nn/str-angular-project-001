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
  itemImageUrl: string;
  itemName: string ="Flector";
  itemDescription: string;
  itemStock: number;
  itemPrice:number;
constructor(product: Product){
  this.itemImageUrl=product.image|| "https://pirulapatika.hu/nagykep/210043735.jpg";
  this.itemName=product.name || 'Flector'
  this.itemDescription= product.description || 'Ez egy gyógyszer';
  this.itemStock= product.stock || 3;
  this.itemPrice=product.price || 4500;
}
  // constructor(itemImageUrl: string, itemName: string, itemDescription: string, itemStock: number, itemPrice:number) { 
  // this.itemImageUrl=itemImageUrl || "https://pirulapatika.hu/nagykep/210043735.jpg";
  // this.itemName=itemName || 'Flector';
  // this.itemDescription=itemDescription || 'Lorem ipsum dolore';
  // this.itemStock=itemStock || 2;
  // this.itemPrice=itemPrice || 15000 ;
  // }
  // oneCard : ProductCardComponent=new ProductCardComponent();

  ngOnInit(): void {
  }

}

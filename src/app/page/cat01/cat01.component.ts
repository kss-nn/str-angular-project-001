import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  prodList: Product[] = this.productService.list;
  catList: Product[] = this.genCatList(this.prodList, 1);
  featList: Product[] = this.generateList(this.catList, true);

  phrase: string = '';

  constructor(
    private productService: ProductService,
) {}

  ngOnInit(): void {
  }

  genCatList(prodArr: Product[], cat: number): Product[] {
    return prodArr.filter(item => item.catId === cat);
  }

  generateList(prodArr: Product[], feat: boolean): Product[] {
    let featArr: Product[] = [];
    featArr = prodArr.filter(item => item.featured === feat);
    let featArrFive: Product[] = [];
    let setOfIndex = new Set([]);
    let index = 0;
    for (let i = 0; i < 5; i++){
      do {
        index = Math.floor(Math.random() * featArr.length);
      } while (setOfIndex.has(index));
      setOfIndex.add(index);
      featArrFive.push(featArr[index]);
    }
    console.log(featArrFive);
    return featArrFive;
  };
  
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}

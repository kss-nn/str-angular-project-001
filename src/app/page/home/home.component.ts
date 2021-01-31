import { Component, OnInit } from '@angular/core';
import { Product } from './../../model/product';
import { ProductService } from './../../service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodList: Product[] = this.productService.list;
  featList: Product[] = this.generateList(this.prodList, true);
  saleList: Product[] = this.generateList(this.prodList, false);

  phrase: string = '';

  constructor(
      private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }

  generateList(prodArr: Product[], feat: boolean): Product[] {
    let featArr: Product[] = [];
    featArr = this.prodList.filter(item => item.featured === feat);
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

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodList: Product[] = this.prodService.list;
  featList: Product[] = this.prodService.generateList(this.prodList, true);
  saleList: Product[] = this.prodService.generateList(this.prodList, false);

  phrase: string = '';

  constructor(
      private prodService: ProductService,
  ) {}

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  //prodList: Product[] = this.prodService.list;
  prodList$: Observable<Product[]> = this.prodService.getAll();


  //catList: Product[] = this.prodService.genCatList(this.prodList,1);
  //featList: Product[] = this.prodService.generateList(this.catList, true);

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

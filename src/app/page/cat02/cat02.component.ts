import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  //prodList: Product[] = this.prodService.list;
  prodList$: Observable<Product[]> = this.prodService.getAll();
  //catList: Product[] = this.prodService.genCatList(this.prodList, 2);
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

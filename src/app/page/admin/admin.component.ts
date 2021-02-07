import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ITableCol, TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //-----Old version
  //prodList: Product[] = this.prodService.list;
  //----------------

  prodList$: Observable<Product[]> = this.prodService.getAll();
  cols: ITableCol[] = this.tableConfig.tableCols;

  phrase: string = '';

  constructor(
    private prodService: ProductService,
    private tableConfig: TableService
  ) {}

  ngOnInit(): void {
  }

  //-----Old version
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  //------------------

}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ITableCol, TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() phraseString: string = '';
  @Input() prods: Observable<Product[]>;
  @Input() columns: ITableCol[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

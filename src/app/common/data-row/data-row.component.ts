import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() prod: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}

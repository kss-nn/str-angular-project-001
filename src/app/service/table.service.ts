import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  editable: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TableService {

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catId', text: 'Kategória', editable: true},
    {key: 'name', text: 'Megnevezés', editable: true},
    {key: 'description', text: 'Leírás', editable: true},
    {key: 'image', text: 'Képforrás', editable: true},
    {key: 'price', text: 'Ár', editable: true},
    {key: 'stock', text: 'Készlet', editable: true},
    {key: 'featured', text: 'Új', editable: true},
    {key: 'active', text: 'Aktív', editable: true},
  ]


  constructor() { }
}

import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Patika Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Kezdőlap', link: '/', icon: 'home'},
    {text: 'Vényköteles', link: '/cat01'},
    {text: 'Recept nélküli', link: '/cat02'},
    {text: 'Adminisztráció', link: '/admin'},
  ];

  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  list: Product[] = [
    {id: 1, catId: 6, name: 'Nitrogen', description: 'Eu tincidunt in leo maecenas pulvinar lobortis', image: '/assets/img/1.jpg', price: 16938, stock: 102, featured: true, active: true },
{id: 2, catId: 3, name: 'Shiseido uv protective', description: 'Et commodo vulputate justo in blandit', image: '/assets/img/2.jpg', price: 19896, stock: 349, featured: true, active: false },
{id: 3, catId: 4, name: 'Allergy relief', description: 'Morbi vestibulum velit id pretium', image: '/assets/img/3.jpg', price: 4041, stock: 240, featured: true, active: false },
{id: 4, catId: 1, name: 'Calcarea sulphurica', description: 'Sociis natoque penatibus', image: '/assets/img/4.jpg', price: 37486, stock: 135, featured: true, active: false },
{id: 5, catId: 6, name: 'Sensorcaine', description: 'Sit amet consectetuer', image: '/assets/img/5.jpg', price: 36839, stock: 250, featured: true, active: true },
{id: 6, catId: 2, name: 'Atenolol', description: 'Tortor id nulla ultrices aliquet maecenas', image: '/assets/img/6.jpg', price: 6304, stock: 190, featured: false, active: true },
{id: 7, catId: 2, name: 'Rexall ibuprofen', description: 'Lorem vitae mattis', image: '/assets/img/7.jpg', price: 3656, stock: 284, featured: false, active: false },
{id: 8, catId: 3, name: 'Fondaparinux sodium', description: 'Eget tempus vel pede morbi porttitor lorem id', image: '/assets/img/8.jpg', price: 25250, stock: 310, featured: false, active: false },
{id: 9, catId: 1, name: 'Metronidazole', description: 'Duis ac nibh fusce lacus purus aliquet at', image: '/assets/img/9.jpg', price: 22437, stock: 190, featured: true, active: false },
{id: 10, catId: 2, name: 'Stemphylium sarciniforms', description: 'Tincidunt eget tempus', image: '/assets/img/10.jpg', price: 7913, stock: 399, featured: true, active: true },
{id: 11, catId: 3, name: 'Necon 10/11', description: 'Nunc proin at turpis a pede posuere nonummy', image: '/assets/img/11.jpg', price: 37966, stock: 423, featured: false, active: true },
{id: 12, catId: 2, name: 'Captopril', description: 'Nunc nisl duis bibendum felis sed', image: '/assets/img/12.jpg', price: 39663, stock: 79, featured: false, active: true },
{id: 13, catId: 3, name: 'Kenalog-40', description: 'Morbi sem mauris laoreet ut rhoncus', image: '/assets/img/13.jpg', price: 3576, stock: 280, featured: true, active: false },
{id: 14, catId: 2, name: 'up and up cold and flu', description: 'Ut ultrices vel augue', image: '/assets/img/14.jpg', price: 34824, stock: 270, featured: true, active: false },
{id: 15, catId: 2, name: 'Glytone acne 3p', description: 'Urna ut tellus nulla ut erat', image: '/assets/img/15.jpg', price: 14229, stock: 405, featured: false, active: false },
{id: 16, catId: 4, name: 'Gemfibrozil', description: 'Leo maecenas pulvinar lobortis est phasellus sit', image: '/assets/img/16.jpg', price: 14260, stock: 83, featured: false, active: false },
{id: 17, catId: 1, name: 'Pantoprazole sodium', description: 'Libero ut massa volutpat convallis', image: '/assets/img/17.jpg', price: 9363, stock: 149, featured: false, active: false },
{id: 18, catId: 5, name: 'Nicorette', description: 'Nibh in lectus pellentesque at nulla', image: '/assets/img/18.jpg', price: 2920, stock: 217, featured: false, active: false },
{id: 19, catId: 2, name: 'good neighbor pharmacy', description: 'Ultrices mattis odio donec vitae nisi', image: '/assets/img/19.jpg', price: 20516, stock: 437, featured: true, active: false },
{id: 20, catId: 5, name: 'Skin supplies for men', description: 'Morbi non quam nec dui luctus rutrum nulla', image: '/assets/img/20.jpg', price: 3444, stock: 429, featured: true, active: true },
{id: 21, catId: 2, name: 'Lobster', description: 'Dolor morbi vel lectus in quam fringilla rhoncus', image: '/assets/img/21.jpg', price: 33691, stock: 163, featured: true, active: true },
{id: 22, catId: 1, name: 'Night time cherry', description: 'Aliquam augue quam sollicitudin vitae consecte', image: '/assets/img/22.jpg', price: 27500, stock: 246, featured: false, active: false },
{id: 23, catId: 4, name: 'Klor-con m', description: 'At nunc commodo placerat praesent blandit', image: '/assets/img/23.jpg', price: 36320, stock: 11, featured: true, active: false },
{id: 24, catId: 3, name: 'Broncofin', description: 'Vivamus vestibulum sagittis sapien cum sociis', image: '/assets/img/24.jpg', price: 15681, stock: 201, featured: false, active: true },
{id: 25, catId: 6, name: 'Metoclopramide', description: 'Congue eget semper rutrum nulla', image: '/assets/img/25.jpg', price: 13458, stock: 346, featured: false, active: true },
{id: 26, catId: 4, name: 'Chapstick lipshield 365', description: 'Hac habitasse platea dictumst morbi vestibulum', image: '/assets/img/26.jpg', price: 5505, stock: 307, featured: false, active: true },
{id: 27, catId: 3, name: 'Fraicheur chevrefeuille', description: 'Aenean lectus pellentesque eget nunc donec', image: '/assets/img/27.jpg', price: 27453, stock: 437, featured: false, active: true },
{id: 28, catId: 3, name: 'Mesna', description: 'Aliquet ultrices erat tortor sollicitudin mi sit', image: '/assets/img/28.jpg', price: 11731, stock: 496, featured: true, active: false },
{id: 29, catId: 4, name: 'Sensai fluid finish ff205', description: 'Curae mauris viverra', image: '/assets/img/29.jpg', price: 5309, stock: 357, featured: false, active: true },
{id: 30, catId: 5, name: 'Cvs homeopathic skin tag', description: 'Vel est donec odio justo sollicitudin ut suscipit', image: '/assets/img/30.jpg', price: 38976, stock: 270, featured: false, active: true },
{id: 31, catId: 6, name: 'Diethylpropion hcl', description: 'Orci nullam molestie nibh', image: '/assets/img/31.jpg', price: 27730, stock: 458, featured: true, active: false },
{id: 32, catId: 1, name: 'dg health miconazole', description: 'Ut dolor morbi vel lectus in', image: '/assets/img/32.jpg', price: 35311, stock: 470, featured: false, active: true },
{id: 33, catId: 5, name: 'Paroxetine hydrochloride', description: 'Phasellus id sapien in', image: '/assets/img/33.jpg', price: 13160, stock: 188, featured: false, active: false },
{id: 34, catId: 6, name: 'Mucus relief d', description: 'Sit amet sapien', image: '/assets/img/34.jpg', price: 34245, stock: 74, featured: true, active: true },
{id: 35, catId: 1, name: 'Drummond american trade', description: 'Cras non velit nec nisi vulputate nonummy', image: '/assets/img/35.jpg', price: 29341, stock: 199, featured: true, active: false },
{id: 36, catId: 6, name: 'Colcrys', description: 'Lectus in quam fringilla rhoncus', image: '/assets/img/36.jpg', price: 27965, stock: 114, featured: false, active: false },
{id: 37, catId: 1, name: 'Physicianscare non aspirin', description: 'Turpis nec euismod', image: '/assets/img/37.jpg', price: 36369, stock: 386, featured: true, active: false },
{id: 38, catId: 1, name: 'Standardized grass pollen', description: 'Nulla pede ullamcorper augue a suscipit nulla elit', image: '/assets/img/38.jpg', price: 5976, stock: 406, featured: true, active: true },
{id: 39, catId: 1, name: 'Oxygen', description: 'Nisl duis bibendum felis sed interdum venenatis', image: '/assets/img/39.jpg', price: 2493, stock: 149, featured: true, active: false },
{id: 40, catId: 2, name: 'Fenofibrate', description: 'Pellentesque ultrices mattis odio donec vitae', image: '/assets/img/40.jpg', price: 19393, stock: 279, featured: true, active: true },
{id: 41, catId: 2, name: 'Ulmus crassifolia pollen', description: 'Ultrices mattis odio donec', image: '/assets/img/41.jpg', price: 24109, stock: 440, featured: true, active: false },
{id: 42, catId: 1, name: 'Midol complete', description: 'Semper rutrum nulla nunc purus', image: '/assets/img/42.jpg', price: 5501, stock: 264, featured: true, active: false },
{id: 43, catId: 5, name: 'Fluconazole', description: 'Ante vestibulum ante ipsum primis in', image: '/assets/img/43.jpg', price: 28935, stock: 238, featured: false, active: true },
{id: 44, catId: 2, name: 'Sensai cellular performance', description: 'Enim lorem ipsum', image: '/assets/img/44.jpg', price: 13902, stock: 17, featured: true, active: true },
{id: 45, catId: 1, name: 'Trazodone hydrochloride', description: 'Vestibulum eget vulputate ut ultrices', image: '/assets/img/45.jpg', price: 32955, stock: 362, featured: false, active: false },
{id: 46, catId: 6, name: 'Meloxicam', description: 'Eu interdum eu tincidunt', image: '/assets/img/46.jpg', price: 24839, stock: 368, featured: false, active: true },
{id: 47, catId: 3, name: 'Albuterol sulfate', description: 'In faucibus orci luctus et ultrices posuere cubilia', image: '/assets/img/47.jpg', price: 7661, stock: 194, featured: false, active: true },
{id: 48, catId: 5, name: 'Bio walnut', description: 'Eros suspendisse accumsan', image: '/assets/img/48.jpg', price: 18300, stock: 98, featured: false, active: false },
{id: 49, catId: 5, name: 'Childrens ibuprofen cold', description: 'Dolor vel est donec odio justo', image: '/assets/img/49.jpg', price: 16998, stock: 389, featured: false, active: false },
{id: 50, catId: 3, name: 'Gabapentin', description: 'Sem duis aliquam convallis', image: '/assets/img/50.jpg', price: 31434, stock: 101, featured: false, active: true },

  ];

  jsonUrl: string = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.jsonUrl);
  }

  update(prod: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.jsonUrl}/${prod.id}`, prod);
  }

  remove(prod: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.jsonUrl}/${prod.id}`);
  }

	generateList(prodArr: Product[], feat: boolean): Product[] {
		let featArr: Product[] = prodArr.filter(item => item.featured === feat);
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
		return featArrFive;
  };

/*  Szűrő van helyette: category-pipe
	genCatList(prodArr: Product[], cat: number): Product[] {
		return prodArr.filter(item => item.catId === cat);
	  }
  */
}

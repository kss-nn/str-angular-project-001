import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  list: Product[] = [
    { id: 1, catId: 6, name: 'Nitrogen', description: 'eu tincidunt in leo maecenas pulvinar lobortis', image: 'tortor.gif', price: 16938, stock: 102, featured: true, active: true },
    { id: 2, catId: 3, name: 'SHISEIDO UV PROTECTIVE FOUNDATION', description: 'et commodo vulputate justo in blandit', image: 'ultrices_posuere.tiff', price: 19896, stock: 349, featured: true, active: false },
	  { id: 3, catId: 4, name: 'Allergy Relief', description: 'morbi vestibulum velit id pretium', image: 'quis.png', price: 4041, stock: 240, featured: true, active: false },
	  { id: 4, catId: 1, name: 'CALCAREA SULPHURICA', description: 'sociis natoque penatibus', image: 'bibendum.gif', price: 37486, stock: 135, featured: true, active: false },
	  { id: 5, catId: 6, name: 'SENSORCAINE', description: 'sit amet consectetuer', image: 'nunc_donec_quis.png', price: 36839, stock: 250, featured: true, active: true },
	  { id: 6, catId: 5, name: 'Atenolol', description: 'tortor id nulla ultrices aliquet maecenas', image: 'duis_bibendum.png', price: 6304, stock: 190, featured: false, active: true },
	  { id: 7, catId: 5, name: 'rexall ibuprofen', description: 'lorem vitae mattis', image: 'vestibulum.jpeg', price: 3656, stock: 284, featured: false, active: false },
	  { id: 8, catId: 3, name: 'FONDAPARINUX SODIUM', description: 'eget tempus vel pede morbi porttitor lorem id', image: 'nam_dui_proin.tiff', price: 25250, stock: 310, featured: false, active: false },
	  { id: 9, catId: 1, name: 'Metronidazole', description: 'duis ac nibh fusce lacus purus aliquet at', image: 'natoque_penatibus_et.jpeg', price: 22437, stock: 190, featured: true, active: false },
	  { id: 10, catId: 2, name: 'Stemphylium sarciniforms', description: 'tincidunt eget tempus', image: 'vestibulum.jpeg', price: 7913, stock: 399, featured: true, active: true },
	  { id: 11, catId: 3, name: 'Necon 10/11', description: 'nunc proin at turpis a pede posuere nonummy', image: 'donec_ut_mauris.tiff', price: 37966, stock: 423, featured: false, active: true },
	  { id: 12, catId: 2, name: 'Captopril', description: 'nunc nisl duis bibendum felis sed', image: 'quam_suspendisse_potenti.jpeg', price: 39663, stock: 79, featured: false, active: true },
	  { id: 13, catId: 3, name: 'KENALOG-40', description: 'morbi sem mauris laoreet ut rhoncus', image: 'id.tiff', price: 3576, stock: 280, featured: true, active: false },
	  { id: 14, catId: 5, name: 'up and up cold and flu relief', description: 'ut ultrices vel augue', image: 'viverra_diam.tiff', price: 34824, stock: 270, featured: true, active: false },
	  { id: 15, catId: 6, name: 'Glytone acne 3P', description: 'urna ut tellus nulla ut erat', image: 'massa_quis_augue.png', price: 14229, stock: 405, featured: false, active: false },
	  { id: 16, catId: 4, name: 'Gemfibrozil', description: 'leo maecenas pulvinar lobortis est phasellus sit amet', image: 'lacinia_erat_vestibulum.tiff', price: 14260, stock: 83, featured: false, active: false },
	  { id: 17, catId: 1, name: 'Pantoprazole Sodium', description: 'libero ut massa volutpat convallis', image: 'ut.tiff', price: 9363, stock: 149, featured: false, active: false },
	  { id: 18, catId: 5, name: 'Nicorette', description: 'nibh in lectus pellentesque at nulla', image: 'sapien_in.tiff', price: 2920, stock: 217, featured: false, active: false },
	  { id: 19, catId: 6, name: 'good neighbor pharmacy pain relief', description: 'ultrices mattis odio donec vitae nisi', image: 'morbi_a_ipsum.jpeg', price: 20516, stock: 437, featured: true, active: false },
	  { id: 20, catId: 5, name: 'SKIN SUPPLIES FOR MEN', description: 'morbi non quam nec dui luctus rutrum nulla', image: 'porttitor_lorem_id.tiff', price: 3444, stock: 429, featured: true, active: true },
	  { id: 21, catId: 6, name: 'LOBSTER', description: 'dolor morbi vel lectus in quam fringilla rhoncus', image: 'luctus_et_ultrices.png', price: 33691, stock: 163, featured: true, active: true },
	  { id: 22, catId: 1, name: 'Night Time Cherry', description: 'aliquam augue quam sollicitudin vitae consectetuer eget', image: 'ut_erat.tiff', price: 27500, stock: 246, featured: false, active: false },
	  { id: 23, catId: 4, name: 'KLOR-CON M', description: 'at nunc commodo placerat praesent blandit', image: 'nulla_suscipit.jpeg', price: 36320, stock: 11, featured: true, active: false },
	  { id: 24, catId: 3, name: 'Broncofin', description: 'vivamus vestibulum sagittis sapien cum sociis natoque penatibus', image: 'nulla.jpeg', price: 15681, stock: 201, featured: false, active: true },
	  { id: 25, catId: 6, name: 'Metoclopramide', description: 'congue eget semper rutrum nulla', image: 'sit.gif', price: 13458, stock: 346, featured: false, active: true },
	  { id: 26, catId: 4, name: 'CHAPSTICK LIPSHIELD 365', description: 'hac habitasse platea dictumst morbi vestibulum velit', image: 'praesent_id_massa.tiff', price: 5505, stock: 307, featured: false, active: true },
	  { id: 27, catId: 3, name: 'FRAICHEUR CHEVREFEUILLE ANTIPERSPIRANT AND DEODORANT ROLL-ON', description: 'aenean lectus pellentesque eget nunc donec', image: 'bibendum.tiff', price: 27453, stock: 437, featured: false, active: true },
	  { id: 28, catId: 3, name: 'Mesna', description: 'aliquet ultrices erat tortor sollicitudin mi sit', image: 'vestibulum.png', price: 11731, stock: 496, featured: true, active: false },
	  { id: 29, catId: 4, name: 'SENSAI FLUID FINISH FF205', description: 'curae mauris viverra', image: 'amet_consectetuer_adipiscing.png', price: 5309, stock: 357, featured: false, active: true },
	  { id: 30, catId: 5, name: 'CVS Homeopathic SKIN TAG REMOVER', description: 'vel est donec odio justo sollicitudin ut suscipit', image: 'eget.png', price: 38976, stock: 270, featured: false, active: true },
	  { id: 31, catId: 6, name: 'Diethylpropion HCl Immediate-Release', description: 'orci nullam molestie nibh', image: 'nullam.jpeg', price: 27730, stock: 458, featured: true, active: false },
	  { id: 32, catId: 1, name: 'dg health miconazole', description: 'ut dolor morbi vel lectus in', image: 'rutrum_at.tiff', price: 35311, stock: 470, featured: false, active: true },
	  { id: 33, catId: 5, name: 'Paroxetine Hydrochloride', description: 'phasellus id sapien in', image: 'ultrices_posuere.tiff', price: 13160, stock: 188, featured: false, active: false },
	  { id: 34, catId: 6, name: 'Mucus Relief D', description: 'sit amet sapien', image: 'vitae_quam.png', price: 34245, stock: 74, featured: true, active: true },
	  { id: 35, catId: 4, name: 'Drummond American Trade Wind Antimicrobial', description: 'cras non velit nec nisi vulputate nonummy', image: 'amet_erat_nulla.png', price: 29341, stock: 199, featured: false, active: false },
	  { id: 36, catId: 6, name: 'Colcrys', description: 'lectus in quam fringilla rhoncus', image: 'mattis.jpeg', price: 27965, stock: 114, featured: false, active: false },
	  { id: 37, catId: 1, name: 'PhysiciansCare Non Aspirin', description: 'turpis nec euismod', image: 'congue_diam.tiff', price: 36369, stock: 386, featured: true, active: false },
	  { id: 38, catId: 1, name: 'Standardized Grass Pollen, Redtop', description: 'nulla pede ullamcorper augue a suscipit nulla elit', image: 'condimentum_id_luctus.tiff', price: 5976, stock: 406, featured: true, active: true },
	  { id: 39, catId: 1, name: 'OXYGEN', description: 'nisl duis bibendum felis sed interdum venenatis', image: 'in.tiff', price: 2493, stock: 149, featured: true, active: false },
	  { id: 40, catId: 6, name: 'FENOFIBRATE', description: 'pellentesque ultrices mattis odio donec vitae', image: 'primis.jpeg', price: 19393, stock: 279, featured: true, active: true },
	  { id: 41, catId: 2, name: 'ULMUS CRASSIFOLIA POLLEN', description: 'ultrices mattis odio donec', image: 'dignissim_vestibulum.tiff', price: 24109, stock: 440, featured: false, active: false },
	  { id: 42, catId: 5, name: 'Midol Complete', description: 'semper rutrum nulla nunc purus', image: 'amet_sem_fusce.jpeg', price: 5501, stock: 264, featured: false, active: false },
	  { id: 43, catId: 5, name: 'Fluconazole', description: 'ante vestibulum ante ipsum primis in', image: 'aenean_auctor.tiff', price: 28935, stock: 238, featured: false, active: true },
	  { id: 44, catId: 6, name: 'SENSAI CELLULAR PERFORMANCE INTENSIVE HAND TREATMENT', description: 'enim lorem ipsum', image: 'eget_massa_tempor.tiff', price: 13902, stock: 17, featured: false, active: true },
	  { id: 45, catId: 1, name: 'Trazodone Hydrochloride', description: 'vestibulum eget vulputate ut ultrices', image: 'hac_habitasse.jpeg', price: 32955, stock: 362, featured: false, active: false },
	  { id: 46, catId: 6, name: 'Meloxicam', description: 'eu interdum eu tincidunt', image: 'in_felis.gif', price: 24839, stock: 368, featured: false, active: true },
	  { id: 47, catId: 3, name: 'Albuterol Sulfate', description: 'in faucibus orci luctus et ultrices posuere cubilia', image: 'ac.gif', price: 7661, stock: 194, featured: false, active: true },
	  { id: 48, catId: 5, name: 'Bio Walnut', description: 'eros suspendisse accumsan', image: 'ac.tiff', price: 18300, stock: 98, featured: false, active: false },
	  { id: 49, catId: 5, name: 'Good Neighbor Pharmacy Childrens Ibuprofen Cold', description: 'dolor vel est donec odio justo', image: 'dolor.png', price: 16998, stock: 389, featured: false, active: false },
	  { id: 50, catId: 3, name: 'Gabapentin', description: 'sem duis aliquam convallis', image: 'cubilia_curae_nulla.jpeg', price: 31434, stock: 101, featured: false, active: true },
  ];

  constructor() { }
} 

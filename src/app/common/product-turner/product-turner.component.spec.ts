import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTurnerComponent } from './product-turner.component';

describe('ProductTurnerComponent', () => {
  let component: ProductTurnerComponent;
  let fixture: ComponentFixture<ProductTurnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTurnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTurnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

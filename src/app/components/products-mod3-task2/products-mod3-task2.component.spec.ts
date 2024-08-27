import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMod3Task2Component } from './products-mod3-task2.component';

describe('ProductsMod3Task2Component', () => {
  let component: ProductsMod3Task2Component;
  let fixture: ComponentFixture<ProductsMod3Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsMod3Task2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsMod3Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

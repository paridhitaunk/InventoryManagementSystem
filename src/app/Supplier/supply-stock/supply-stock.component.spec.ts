import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyStockComponent } from './supply-stock.component';

describe('SupplyStockComponent', () => {
  let component: SupplyStockComponent;
  let fixture: ComponentFixture<SupplyStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

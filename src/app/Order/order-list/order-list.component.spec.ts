import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistComponent } from './order-list.component';

describe('OrderListComponent', () => {
  let component: OrderlistComponent;
  let fixture: ComponentFixture<OrderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

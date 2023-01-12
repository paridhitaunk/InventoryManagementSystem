import { CdkStepperNext } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/Models/orders';
import { SupplierForm } from 'src/app/Models/Supplier';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { CommonServiceService } from 'src/app/SharedService/common-service.service';

interface IOrderStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.css'],
})
export class CancelledComponent implements OnInit {
  Order_LIST: Order[];
  currentSupplier: any;
  displayedColumns = [
    'oId',
    'oNoProduct',
    'oAmount',
    'oDate',
    'oPayment',
    'oPaymentType',
    'oStatus',
  ];
  orderStatus: IOrderStatus[] = [
    { value: '1', viewValue: 'Delivered' },
    { value: '2', viewValue: 'Pending' },
    { value: '3', viewValue: 'Canceled' },
    { value: '4', viewValue: 'Returned' },
  ];

  constructor(
    public dialog: MatDialog,
    private service: InventoryServicesService,
    private commonServices:CommonServiceService
  ) {}

  ngOnInit(): void {
    this.currentSupplier= this.commonServices.userData;
    this.service.orderGetData().subscribe((data: Order[]) => {
      this.Order_LIST = data.filter((order) => order.oStatus == 'Canceled' && order.supplier == this.currentSupplier.name );

    });
  }
}

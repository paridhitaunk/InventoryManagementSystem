import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { CommonServiceService } from 'src/app/SharedService/common-service.service';

interface IOrderStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent implements OnInit {

  Order_LIST: Order[];
  currentSupplier:any;
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  orderStatus: IOrderStatus[] = [
    {value: '1', viewValue: 'Delivered'},
    {value: '2', viewValue: 'Pending'},
    {value: '3', viewValue: 'Canceled'},
    {value: '4', viewValue: 'Returned'},
  ];

  constructor(public dialog: MatDialog,private service:InventoryServicesService,private commonServices:CommonServiceService){}

  ngOnInit():void
  {
  //  this.service.orderGetData().subscribe((data:Order[]) => {
  //    this.Order_LIST = data.filter( order => order.oStatus=='Delivered');
  //    {
  //    console.log(data);
  //    }
  //  })
   this.currentSupplier= this.commonServices.userData;
   this.service.orderGetData().subscribe((data: Order[]) => {
     this.Order_LIST = data.filter((order) => order.oStatus == 'Delivered' && order.supplier == this.currentSupplier.name );
   });
  }

}

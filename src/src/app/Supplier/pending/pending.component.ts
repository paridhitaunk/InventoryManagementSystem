import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

interface IOrderStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  Order_LIST: Order[];
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  orderStatus: IOrderStatus[] = [
    {value: '1', viewValue: 'Delivered'},
    {value: '2', viewValue: 'Pending'},
    {value: '3', viewValue: 'Canceled'},
    {value: '4', viewValue: 'Returned'},
  ];

  constructor(public dialog: MatDialog,private service:InventoryServicesService){}

  ngOnInit():void
  {
   this.service.orderGetData().subscribe((data:Order[]) => {
     this.Order_LIST = data.filter( order => order.oStatus=='Pending');
     {
     console.log(data);
     }
   })
  }

}
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { OrderDetailsComponent } from 'src/app/Order/order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.css']
})
export class ReceivePaymentComponent implements OnInit {

  Order_LIST: Order[];
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  ngOnInit():void
  {
   this.service.orderGetData().subscribe((data:Order[]) => {
     this.Order_LIST = data.filter(x=>x.oPayment=='Done');
     {

     console.log(data);
     }
   })
  }
  constructor(public dialog: MatDialog,private service:InventoryServicesService){}

}
  
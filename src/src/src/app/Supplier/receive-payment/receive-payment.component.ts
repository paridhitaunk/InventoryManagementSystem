import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { OrderDetailsComponent } from 'src/app/Order/order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/SharedService/common-service.service';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.css']
})
export class ReceivePaymentComponent implements OnInit {

  Order_LIST: Order[];
  currentSupplier:any;
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  ngOnInit():void
  {
  //  this.service.orderGetData().subscribe((data:Order[]) => {
  //    this.Order_LIST = data.filter( order => order.oPayment=='Done');
  //    {
  //    console.log(data);
  //    }
  //  })
   this.currentSupplier= this.commonServices.userData;
   this.service.orderGetData().subscribe((data: Order[]) => {
     this.Order_LIST = data.filter((order) => order.oPayment == 'Done' && order.supplier == this.currentSupplier.name );
   });
   
  }
  constructor(public dialog: MatDialog,private service:InventoryServicesService,private commonServices:CommonServiceService){}

}
  
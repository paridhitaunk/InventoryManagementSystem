import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MakePaymentComponent } from '../make-payment/make-payment.component';
import { ReportQualityComponent } from '../report-quality/report-quality.component';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { ReturnStockComponent } from '../return-stock/return-stock.component';

interface IOrderStatus {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public dialog: MatDialog,private service:InventoryServicesService){}
  Order_LIST: Order[];
  displayedColumns = ['id','pId','productName','oNoOfProducts','oAmount','oDate','oPayment','oPaymentType','oStatus','reportIssue','action'];
  orderStatus: IOrderStatus[] = [
    {value: '1', viewValue: 'Delivered'},
    {value: '2', viewValue: 'Pending'},
    {value: '3', viewValue: 'Canceled'},
    {value: '4', viewValue: 'Returned'},
  ];
  ngOnInit():void
  {
   this.service.orderGetData().subscribe((data:Order[]) => {
     this.Order_LIST = data;
     console.log(data);
   })
  }
  orderStatusOnChanged(orderStatusValue:string){
    this.Order_LIST=[];
    this.service.orderGetData().subscribe((data:Order[]) => {
      this.Order_LIST=data.filter(x=>x.oStatus==this.orderStatus.find(x=>x.value==orderStatusValue)?.viewValue)
     //console.log(orderStatusValue);
    })
  }

  
  makePaymentDialog(element:any){
    const dialogRef=this.dialog.open(MakePaymentComponent,{data:element});
      console.log(element);
  }
  reportQualityIssue(element:any){
    const dialogRefForIssue=this.dialog.open(ReportQualityComponent,{data:element});
  }
  returnStocks(element:any){
    const dialogRefForIssue=this.dialog.open(ReturnStockComponent,{data:element});
  }
}
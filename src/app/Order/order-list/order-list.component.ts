import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-orderlist',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderlistComponent implements OnInit {

  Order_LIST: Order[];
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  ngOnInit():void
  {
   this.service.orderGetData().subscribe((data:Order[]) => {
     this.Order_LIST = data;
     console.log(data);
   })
  }
  constructor(public dialog: MatDialog,private service:InventoryServicesService){}
 

  openDialog() 
  {
    const dialogRef = this.dialog.open(OrderDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editProduct(element:any)
  {
    this.dialog.open(OrderDetailsComponent,{
      data:element
    });

  }

  Delete(id:number)
  {
    this.service.DeleteProduct(id).subscribe()
  }
   


  }
  
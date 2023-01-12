import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { OrderDetailsComponent } from 'src/app/Order/order-details/order-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.css']
})
export class ReceivePaymentComponent implements OnInit {

  Order_LIST: Order[];
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  
  constructor(public dialog: MatDialog,private authService:AuthenticationService,private service:InventoryServicesService,private router:Router){}

  ngOnInit():void
  {
   this.service.orderGetData().subscribe((data:Order[]) => {
     this.Order_LIST = data.filter( order => order.oPayment=='Done');
     {
     console.log(data);
     }
   })
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }
}
  
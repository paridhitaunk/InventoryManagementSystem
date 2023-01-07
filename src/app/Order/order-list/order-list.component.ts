import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderlistComponent implements OnInit {

    constructor(private rs:InventoryServicesService) { }
  
    stu!:Order[];
  
    ngOnInit(): void {
  
      this.rs.orderGetData().subscribe(list =>{
  
        this.stu=list
      })
    }
  
    deleteDataById(orderId :number)
    {
    this.rs.deleteorderData(orderId).subscribe( data =>{
    console.log(data);
    window.location.reload();
  })
    }
  }
  
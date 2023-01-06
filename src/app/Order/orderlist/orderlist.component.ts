import { Component, OnInit } from '@angular/core';
import { ModelComponent } from 'src/app/Login/model/model.component';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

    constructor(private rs:InventoryServicesService) { }
  
    stu!:ModelComponent[];
  
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
  
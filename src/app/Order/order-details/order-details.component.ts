import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { Order } from 'src/app/Models/orders';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
 
  constructor(private fb:FormBuilder,private rs:InventoryServicesService ,private _Router:Router) { }

  
  orderDetailsform!:FormGroup;
  orders:Order[];
  copyCorders:Order[];
  
  orderIdpattern!:"^[0-9]$"
  displayedColumns = ['id','pId','productName','oNoOfProducts','oAmount','oDate','oPayment','oPaymentType','oStatus','reportIssue','action'];
  ngOnInit(): void {
    this.orders=[];
    this.copyCorders=[];
    this.orderDetailsform=this.fb.group({
      id: new FormControl('', [Validators.required]),
      pId: new FormControl('', [Validators.required]),
      productName:new FormControl(''),
      oNoOfProducts: new FormControl('', [Validators.required]),
      oAmount:new FormControl('',[Validators.required]),
      oPaymentType:new FormControl('',[Validators.required]),
      oPayment:new FormControl('',[Validators.required]),
      oDate:new FormControl('',[Validators.required]),
      oStatus:new FormControl('',[Validators.required]),
      reportIssue:new FormControl('')
      });
   
  }
  public errorFunc = (controlName: string, errorName: string) =>{
    return this.orderDetailsform.controls[controlName].hasError(errorName);
    }
    removeOrder(id:string){

    }
    orderFunc(){
    if(this.orderDetailsform.valid)
    {
      console.log(this.orderDetailsform.value);
      this.copyCorders.concat(this.orderDetailsform.value);
      this.orders=this.copyCorders;
      console.log(this.orders);
    //console.log("RequiredDataisValid");
    //this.rs.saveorderDetails(this.orderDetailsform.value).subscribe();
    //alert('you are successfully Register');
    // this._Router.navigate(['order-list']);
   
    }
    else
    {
      console.log("DataisNotValid");
    }
  }
  
}



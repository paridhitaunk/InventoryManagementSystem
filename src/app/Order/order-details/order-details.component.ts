import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
 
  constructor(private fb:FormBuilder,private rs:InventoryServicesService ,private _Router:Router) { }

  
  orderDetailsform!:FormGroup;

  
  orderIdpattern!:"^[0-9]$"

  ngOnInit(): void {
    this.orderDetailsform=this.fb.group({
      orderId: new FormControl('', [Validators.required]),
      pId: new FormControl('', [Validators.required]),
      oNoOfProducts: new FormControl('', [Validators.required]),
      oAmount:new FormControl('',[Validators.required]),
      oPaymentType:new FormControl('',[Validators.required]),
      oPayment:new FormControl('',[Validators.required]),
      oDate:new FormControl('',[Validators.required]),
      oStatus:new FormControl('',[Validators.required]),
      });
   
  }
  public errorFunc = (controlName: string, errorName: string) =>{
    return this.orderDetailsform.controls[controlName].hasError(errorName);
    }
    
    orderFunc(){
    if(this.orderDetailsform.valid)
    {
    console.log("RequiredDataisValid");
    this.rs.saveorderDetails(this.orderDetailsform.value).subscribe();
    alert('you are successfully Register');
    this._Router.navigate(['order-list']);
   
    }
    else
    {
      console.log("DataisNotValid");
    }
  }
  
}




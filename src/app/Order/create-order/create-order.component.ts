import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'src/app/Models/Product';
import {SupplierForm } from 'src/app/Models/Supplier';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router,private service:InventoryServicesService){}
  selected:string;
  suppliers: SupplierForm[];
  productData : product[];
  priceData: number;
  Amount: number;
  productId : number;
  formProducts !: FormArray<any>;

  ngOnInit()
  {
    this.service.GetProduct().subscribe((data:product[]) => {
      this.productData = data;
      console.log(data);
    });

    this.service.GetSupplier().subscribe((data:SupplierForm[]) => {
      this.suppliers = data;
      console.log(data);
    })
  }

  orderForm = this.fb.group({
      id: this.fb.control('',[Validators.required]),
      supplier: this.fb.control('0'),
      products: this.fb.array([]),
      oAmount:this.fb.control('',[Validators.required]),
      oPaymentType:this.fb.control('',[Validators.required]),
      oPayment:this.fb.control('',[Validators.required]),
      oDate:this.fb.control('',[Validators.required]),
      oStatus:this.fb.control('',[Validators.required]),
  });

  redirectList()
  {
      this.route.navigate(['orderlist'])
  }

  AddProducts()
  {
    this.formProducts = this.orderForm.get("products") as FormArray;
    this.formProducts.push(this.Generaterow());
  }

  RemoveProduct(index:any)
  {
    if(confirm("do you want to remove this product?"))
    {
    this.formProducts = this.orderForm.get("products") as FormArray;
    this.formProducts.removeAt(index);
    }
  }

  Generaterow()
  {
    return this.fb.group({
      pId: this.fb.control({value:0,disabled:true}),
      productName: this.fb.control(''),
      productPrice: this.fb.control(this.priceData),
      quantity: this.fb.control(''),
      amount: this.fb.control('')
    });
  }

  get products()
  {
    return  this.formProducts = this.orderForm.get("products") as FormArray;
  }

  getPrice()
  {
    
  }

  SaveOrder()
  {
    console.log(this.orderForm.value);
  }
}

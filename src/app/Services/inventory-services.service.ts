import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { SupplierForm } from 'src/app/Model/Supplier';

@Injectable({
  providedIn: 'root'
})

export class InventoryServicesService {
  
  constructor(private http:HttpClient) { }
  
  baseUrl:string = "http://localhost:3000";

  // supplier = new SupplierForm();
  
  // supplierId = new Subject(); //Subject gives upcoming value
  // setEmpId(id:any){
  //   console.log(id);
  //   this.supplierId.next(id); //data stored to Observable
  // }


  SaveSupplierDetails(supplier: SupplierForm)
  {
      return this.http.post<SupplierForm>(this.baseUrl+"/Supplier",supplier);
  }

  GetSupplier()
  {
      return this.http.get<any>(this.baseUrl+"/Supplier");
  }

  DeleteSupplier(id:number)
  {
     return this.http.delete(this.baseUrl+"/Supplier/"+id);
  }
  
}

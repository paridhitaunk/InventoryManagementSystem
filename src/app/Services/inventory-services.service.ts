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
  
  supplierId = new Subject(); //Subject gives upcoming value
  // setSupplierId(id:any){
  //   console.log(id);
  //   this.supplierId.next(id); //data stored to Observable
  // }


  AddSupplier(supplier: any): Observable<any> 
  {
      return this.http.post<any>(this.baseUrl+"/Supplier",supplier);
  }

  GetSupplier(): Observable<any> 
  {
    return this.http.get<any>(this.baseUrl+"/Supplier");
  }

  GetSupplierById(id:any):Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}/Supplier/${id}`)
  }

  EditSupplier(data: any, id:number): Observable<any> 
  {
    return this.http.put(`${this.baseUrl}/Supplier/${id}`, data)
  }

  DeleteSupplier(id:number): Observable<any>
  {
     return this.http.delete(this.baseUrl+"/Supplier/"+id);
  }

}

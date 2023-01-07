import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { SupplierForm } from 'src/app/Models/Supplier';

@Injectable({
  providedIn: 'root'
})

export class InventoryServicesService {

  // supplier = new SupplierForm();

  s = new Subject();
  baseUrl:string = "http://localhost:3000";
    constructor(private http:HttpClient) { }



    // <--------------------------------- User Services --------------------------------------------->



    Save(obj:any){
      console.log("save");
      return this.http.post<any>(this.baseUrl+"/Users",obj);
    }
  
    userGetData():Observable<any[]>
  {
     return this.http.get<any[]>(this.baseUrl+"/Users");
  }



    //<---------------------- product Servicess ---------------------------------------------------->

    
    AddProduct(data: any): Observable<any> 
    {
      return this.http.post<any>(`${this.baseUrl}/Product`, data)
    }
    GetProduct(): Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/Product`)
    }
    // GetData(id:number)
    // {
    //   this.s.next(id);
    // }
    GetProductById(id:any):Observable<any>
    {
      return this.http.get<any>(`${this.baseUrl}/Product/${id}`)
    }
    UpdateProduct(data: any, id:number): Observable<any> 
    {
      return this.http.put(`${this.baseUrl}/product/${id}`, data)
    }
    DeleteProduct(id: number): Observable<any>{
      return this.http.delete(`${this.baseUrl}/product/${id}`)
  }
  


// <---------------------------- Supplier Servicess ------------------------------------------------>




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





  // <-----------------------------order Services------------------------------------------------>



  
  saveorderDetails(obj:any){
    console.log("save");
    return this.http.post<any>(this.baseUrl+"/OrderDetails",obj);
  }
  

  orderGetData():Observable<any[]>
  {
     return this.http.get<any[]>(this.baseUrl+"/OrderDetails");
  }

 deleteorderData(orderId:number)
 {
     return this.http.delete(this.baseUrl+"/deletedata/"+ orderId);
 }
 

 

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryServicesService {
  s = new Subject();
  baseUrl:string = "http://localhost:3000";
    constructor(private http:HttpClient) { }
  
    
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
  
}

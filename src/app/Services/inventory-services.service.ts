import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ModelComponent } from '../Login/model/model.component';
@Injectable({
  providedIn: 'root'
})
export class InventoryServicesService {
baseUrl:string = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  Save(obj:ModelComponent){
    console.log("save");
    return this.http.post<ModelComponent>(this.baseUrl+"/Users",obj);
  }
  saveorderDetails(obj:ModelComponent){
    console.log("save");
    return this.http.post<ModelComponent>(this.baseUrl+"/OrderDetails",obj);
  }
  userGetData():Observable<ModelComponent[]>
  {
     return this.http.get<ModelComponent[]>(this.baseUrl+"/Users");
  }

  orderGetData():Observable<ModelComponent[]>
  {
     return this.http.get<ModelComponent[]>(this.baseUrl+"/OrderDetails");
  }

 deleteorderData(orderId:number)
 {
     return this.http.delete(this.baseUrl+"/deletedata/"+ orderId);
 }
 
  





  
}

import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { getAuth } from "firebase/auth";
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { SupplierForm } from 'src/app/Models/Supplier';
import { CommonServiceService } from 'src/app/SharedService/common-service.service';
@Component({
  selector: 'app-supplier-login',
  templateUrl: './supplier-login.component.html',
  styleUrls: ['./supplier-login.component.css']
})
export class SupplierLoginComponent {

  constructor(private authService:AuthenticationService,private service:InventoryServicesService,private commonServices:CommonServiceService){}

  
  username:any;
  suppliers:SupplierForm[];
  currentUser:SupplierForm = {name:'',email:'',phoneNumber:0,id:0,address:''};
  lengtharray:number;
  ngOnInit()
  {
    var user = '';
    const auth = getAuth();
    user = auth.currentUser?.displayName as string;
    // this.username= user!.displayName
    // console.log(this.username);
    // console.log(user);

    // this.service.GetSupplier().subscribe(res =>{
    //   this.suppliers = res;
    //  this.lengtharray  = this.suppliers.length  
    // });

    // this.get(this.username,this.suppliers,this.lengtharray);

   
      this.service.GetSupplier().subscribe(res=>{
        // this.username= user!.displayName ,
       this.suppliers = res;
       this.lengtharray = this.suppliers.length
      //  console.log(this.suppliers);

       console.log(this.get(user,this.suppliers));
      //  this.service.getCurrentUser(this.get(user,this.suppliers))
       this.commonServices.getUserData(this.currentUser);
       console.log(this.commonServices.userData);
     })      
  }


   get(username:any,suppliers:SupplierForm[]): SupplierForm
  {
    this.currentUser = suppliers[suppliers.findIndex(x => x.name== username, 1)]
    this.currentUser.name = username;
    return this.currentUser;
  }
   
  

  
}

import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { getAuth } from "firebase/auth";
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { SupplierForm } from 'src/app/Models/Supplier';
@Component({
  selector: 'app-supplier-login',
  templateUrl: './supplier-login.component.html',
  styleUrls: ['./supplier-login.component.css']
})
export class SupplierLoginComponent {

  constructor(private authService:AuthenticationService,private service:InventoryServicesService){}

  
  username:any;
  suppliers:SupplierForm[];
  currentUser:SupplierForm;
  lengtharray:number;
  ngOnInit()
  {
    const auth = getAuth();
    const user = auth.currentUser;
    // this.username= user!.displayName
    // console.log(this.username);
    // console.log(user);

    // this.service.GetSupplier().subscribe(res =>{
    //   this.suppliers = res;
    //  this.lengtharray  = this.suppliers.length  
    // });

    // this.get(this.username,this.suppliers,this.lengtharray);

   
      this.service.GetSupplier().subscribe(res=>{
        this.username= user!.displayName ,
       this.suppliers = res;
       this.lengtharray = this.suppliers.length
       console.log(this.suppliers);
       this.get(this.username,this.suppliers,this.lengtharray)
     })
  
      
   
       
    
    
  }



  // ngAfterContentInit()
  // {
  //   this.get(this.username,this.suppliers)
  // }

   get(username:any,suppliers:SupplierForm[],length:number)
  {
    console.log(length);
     for(let i=0;i<length;i++)
     {
        if(suppliers[i].name === username)
        {
          this.currentUser = suppliers[i];
          console.log(this.currentUser);
        }
     }
   
  }
   
  

  
}

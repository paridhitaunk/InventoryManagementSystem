import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private fb:FormBuilder,private rs:InventoryServicesService ,private _Router:Router) { }

  
  loginform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{6,32}$";
  passwordpattern!:"^[a-zA-Z0-9]{6,12}$";
  mobilepattern!:"^[0-9]{10,10}$"

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      password:new FormControl('',[Validators.required,Validators.pattern(this.passwordpattern)]),
      });
   
  }
  public errorFunc = (controlName: string, errorName: string) =>{
    return this.loginform.controls[controlName].hasError(errorName);
    }
    loginFunc(){
      if(this.loginform.valid)
      {
       
        let data = this.rs.userGetData().subscribe(mydata =>{
          const enduser = mydata.find((m:any) => {
            return m.email== this.loginform.value.email && m.password == this.loginform.value.password 
          });
            if (enduser)
            {
              console.log("Datavalid");
              this._Router.navigate(['app']);
            }
            
            else
            {
              console.log("InvalidData");
            }
            console.log(enduser);
          } )
          
  
  
      }
     
     }
  
  }
  
  



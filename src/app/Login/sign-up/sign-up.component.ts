import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private fb:FormBuilder,private rs:InventoryServicesService ,private _Router:Router) { }

  
  registerform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{6,32}$";
  passwordpattern!:"^[a-zA-Z0-9]{6,12}$";
  mobilepattern!:"^[0-9]{10,10}$"

  ngOnInit(): void {
    this.registerform=this.fb.group({
      name: new FormControl('', [Validators.required,Validators.pattern(this.namepattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      password:new FormControl('',[Validators.required,Validators.pattern(this.passwordpattern)]),
      role:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.pattern(this.mobilepattern)]),
      });
   
  }
  public errorFunc = (controlName: string, errorName: string) =>{
    return this.registerform.controls[controlName].hasError(errorName);
    }
    
    registerFunc(){
    if(this.registerform.valid)
    {
      console.log("RequiredDataisValid");
    this.rs.Save(this.registerform.value).subscribe();
    alert('you are successfully Register');
    this._Router.navigate(['sign-in']);
   
    }
    else
    {
      console.log("DataisNotValid");
    }
  }
  
}


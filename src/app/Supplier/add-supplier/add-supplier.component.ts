import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  FormSubmit!:FormGroup; 
  
  constructor(private fb:FormBuilder,private service:InventoryServicesService) { }
  
  ngOnInit(): void {
    this.FormSubmit=this.fb.group({
      sId:['',[Validators.required]],
      sName:['',[Validators.required,Validators.maxLength(32)]],
      sPhoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      sAddress:['', Validators.required]
      })
    }

    onSubmit()
    {
    this.service.SaveSupplierDetails(this.FormSubmit.value).subscribe();
    alert("Supplier added Successfully")
    console.log(this.FormSubmit.value);
    window.location.reload();
    }

}

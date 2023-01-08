import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {



  SupplierForm!: FormGroup;


  
  constructor(private fb: FormBuilder, private service: InventoryServicesService, private DialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {

    this.SupplierForm = this.fb.group({
      sId: ['', [Validators.required]],
      sName: ['', [Validators.required, Validators.maxLength(32)]],
      sPhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      sAddress: ['', Validators.required]
    })
  }

  onSubmit() {


    this.service.AddSupplier(this.SupplierForm.value)
      .subscribe(response => {
        console.log(response)
      })
    this.SupplierForm.reset();
    this.DialogRef.close('save');
    alert("Supplier added Successfully")
    window.location.reload();

  }
 
  reset() {
    this.SupplierForm.reset();
  }
}



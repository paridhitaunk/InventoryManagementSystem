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
  isEdit: boolean = false;
  id: number;

  SupplierForm = this.fb.group({
    sId: ['', [Validators.required]],
    sName: ['', [Validators.required, Validators.maxLength(32)]],
    sPhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    sAddress: ['', Validators.required]
  })
  // constructor(private fb:FormBuilder,private service:InventoryServicesService) { }
  constructor(private fb: FormBuilder, private service: InventoryServicesService, private DialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.service.supplierId.subscribe(id => {
      this.service.GetSupplierById(id).subscribe({
        next: (res) => {
          this.isEdit = true;
          this.id = res.id;
          this.SupplierForm.value.sId = res.sId;
          this.SupplierForm.value.sName = res.sName;
          this.SupplierForm.value.sPhoneNumber = res.sPhoneNumber;
          this.SupplierForm.value.sAddress = res.sAddress;
        }
      })
    });


    if (this.editData) {
      this.isEdit = true;
      this.id = this.editData.id;
      this.SupplierForm.controls['sId'].setValue(this.editData.sId)
      this.SupplierForm.controls['sName'].setValue(this.editData.sName)
      this.SupplierForm.controls['sPhoneNumber'].setValue(this.editData.sPhoneNumber)
      this.SupplierForm.controls['sAddress'].setValue(this.editData.sAddress)

    }
  }

  onSubmit() {

    if (!this.editData)
     {
      this.service.AddSupplier(this.SupplierForm.value)
        .subscribe(response => {
          console.log(response)
        })
      this.SupplierForm.reset();
      this.DialogRef.close('save');
      alert("Supplier added Successfully")
      window.location.reload();

    }





    else {
      this.service.EditSupplier(this.SupplierForm.value, this.id).subscribe();
      console.log(this.id);
      console.log(this.SupplierForm.value)
      this.DialogRef.close('edit');
      alert("Supplier Edited Successfully")
      window.location.reload();

    }
  }

  reset() {
    this.SupplierForm.reset();
  }
}



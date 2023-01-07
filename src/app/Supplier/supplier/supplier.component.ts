import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { AddSupplierComponent } from '../add-supplier/add-supplier.component';
import { SupplierForm } from 'src/app/Models/Supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})


export class SupplierComponent implements OnInit {

  Supplier_LIST: SupplierForm[];
  displayedColumns = [ 'sId', 'sName' ,'sPhoneNumber', 'sAddress','Action'];

  constructor(public dialog: MatDialog,private service:InventoryServicesService){}

  ngOnInit(): void {
    this.service.GetSupplier().subscribe((data:SupplierForm[]) => {
      this.Supplier_LIST = data;
      console.log(data);
    })
  }
  
  openDialog() 
  {
    const dialogBox = this.dialog.open(AddSupplierComponent);
    dialogBox.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  color:string='lightpink';

  
  EditSupplier(details:any)
  {
    this.dialog.open(AddSupplierComponent,{
      data: details
    });
  }

  DeleteSupplier(id:number)
  {
    this.service.DeleteSupplier(id).subscribe()
    window.location.reload();
  }
}




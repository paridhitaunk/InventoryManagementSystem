import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
const routes: Routes = [
  {
    path:"",
    component:AdminDashboardComponent
  },
  {
    path:"orderDetails",
    component:AdminComponent
  }, 
  {path:"supplier",component:SupplierComponent},
  {path:"addSupplier",component:AddSupplierComponent},
  {
    path:'addOrder',
    component:OrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

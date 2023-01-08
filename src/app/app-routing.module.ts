import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';

import { ReceivePaymentComponent } from './Supplier/receive-payment/receive-payment.component';
import { SupplyStockComponent } from './Supplier/supply-stock/supply-stock.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component:SignInComponent},
  {path:"supplier",component:SupplierComponent},
  {path:"addSupplier",component:AddSupplierComponent},
  {path:"receivePayment",component:ReceivePaymentComponent},
  {path:"supplyStock",component:SupplyStockComponent},
  {path:'login', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'dashboard', component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

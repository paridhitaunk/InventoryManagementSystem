import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';

import { ReceivePaymentComponent } from './Supplier/receive-payment/receive-payment.component';
import { SupplyStockComponent } from './Supplier/supply-stock/supply-stock.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

import { ProductComponent } from './Product/product/product.component';
import { AddProductComponent } from './Product/add-product/add-product.component';

import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { OrderlistComponent } from './Order/order-list/order-list.component';

import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';

import { AdminComponent } from './Admin/admin/admin.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

import { MakePaymentComponent } from './Admin/make-payment/make-payment.component';
import { ReportQualityComponent } from './Admin/report-quality/report-quality.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"makePayment",component:MakePaymentComponent},
  {path:"reportQuality",component:ReportQualityComponent},
  {path:"supplier",component:SupplierComponent},
  {path:"addSupplier",component:AddSupplierComponent},
  {path:"receivePayment",component:ReceivePaymentComponent},
  {path:"supplyStock",component:SupplyStockComponent},
  {path:"product",component:ProductComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"orderDetails",component:OrderDetailsComponent},
  {path:"orderList",component:OrderlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

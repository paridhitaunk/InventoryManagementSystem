import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';

import { ReceivePaymentComponent } from './Supplier/receive-payment/receive-payment.component';

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
import { SupplierLoginComponent } from './Login/supplier-login/supplier-login.component';
import { TrackOrderComponent } from './Supplier/track-order/track-order.component';
import { CancelledComponent } from './Supplier/cancelled/cancelled.component';
import { DeliveredComponent } from './Supplier/delivered/delivered.component';
import { PendingComponent } from './Supplier/pending/pending.component';
import { ReturnedComponent } from './Supplier/returned/returned.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"orderList",component:AdminComponent},
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"makePayment",component:MakePaymentComponent},
  {path:"reportQuality",component:ReportQualityComponent},
  
  {path:"supplier",component:SupplierComponent},
  {path:"addSupplier",component:AddSupplierComponent},
  {path:"receivePayment",component:ReceivePaymentComponent},
  {path:"trackOrder",component:TrackOrderComponent},
  {path:"deliveredOrder",component:DeliveredComponent},
  {path:"pendingOrder",component:PendingComponent},
  {path:"returnedOrder",component:ReturnedComponent},
  {path:"cancelledOrder",component:CancelledComponent},

  {path:"product",component:ProductComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"orderDetails",component:OrderDetailsComponent},
  // {path:"orderList",component:OrderlistComponent},
  
  {path:"supplierLogin",component:SupplierLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

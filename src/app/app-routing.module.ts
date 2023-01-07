import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';
import { ReceivePaymentComponent } from './Supplier/receive-payment/receive-payment.component';
import { SupplyStockComponent } from './Supplier/supply-stock/supply-stock.component';

import { ProductComponent } from './Product/product/product.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { OrderlistComponent } from './Order/order-list/order-list.component';

const routes: Routes = [
  {path:"supplier",component:SupplierComponent},
  {path:"addSupplier",component:AddSupplierComponent},

  {path:"receivePayment",component: ReceivePaymentComponent},
  {path:"supplyStock",component: SupplyStockComponent},

  {path:"product",component: ProductComponent},

  {path:"order",component: OrderDetailsComponent},
  {path:"orderList",component: OrderlistComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

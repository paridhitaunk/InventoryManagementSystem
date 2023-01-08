import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';
import { Order } from './Models/orders';
import { CreateOrderComponent } from './Order/create-order/create-order.component';
import { OrderlistComponent } from './Order/order-list/order-list.component';
import { SellOrderComponent } from './Order/sell-order/sell-order.component';

const routes: Routes = [
  {path:'supplier',component:SupplierComponent},
  {path:'addSupplier',component:AddSupplierComponent},
    {path:'addOrder',component:CreateOrderComponent},
    {path:'orderlist', component:OrderlistComponent},
    {path:'sellOrder', component:SellOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

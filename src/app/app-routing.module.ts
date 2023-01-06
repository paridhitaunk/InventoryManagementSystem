import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { OrderlistComponent } from './Order/orderlist/orderlist.component';
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'order-details', component:OrderDetailsComponent  },
  { path: 'order-list', component:OrderlistComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

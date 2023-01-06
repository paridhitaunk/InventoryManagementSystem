import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './Admin/admin/admin.component';

const routes: Routes = [
  {
    path:"",
    component:AdminDashboardComponent
  },
  {
    path:"orderDetails",
    component:AdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

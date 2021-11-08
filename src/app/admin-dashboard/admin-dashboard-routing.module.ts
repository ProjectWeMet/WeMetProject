import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredAdminComponent } from './dashbored-admin/dashbored-admin.component';

const routes: Routes = [{
  path:'',
  component:DashboredAdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

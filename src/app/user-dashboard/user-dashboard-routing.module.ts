import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../user-dashboard/projects/projects.component';
import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';

const routes: Routes = [
  {
    path:'projects',
    component:ProjectsComponent
  },{
    path:'projectDetailes',
    component:ProjectDetailesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }

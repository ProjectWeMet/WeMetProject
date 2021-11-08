import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsComponent } from '../user-dashboard/projects/projects.component';
import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'user',
    component:UsersComponent
  },
  {
    path:'projects',
    component:ProjectsComponent

  },
  {
    path:'profile',
    component:ProfileComponent
  },{
    path:'projectDetailes',
    component:ProjectDetailesComponent

  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }

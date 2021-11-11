import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';
import { PublishedProjectsComponent } from './published-projects/published-projects.component';
import { UsersComponent } from './users/users.component';
import { PublishedDetailesComponent } from './published-detailes/published-detailes.component';

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
  },{
    path:'publishedProjects',
    component:PublishedProjectsComponent

  },{
    path:'publishedDetailes',
    component:PublishedDetailesComponent

  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }

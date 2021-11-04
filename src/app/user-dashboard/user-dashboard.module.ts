import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';
import { UsersComponent } from './users/users.component';
import { PublishedProjectsComponent } from './published-projects/published-projects.component';
import { ShownProjectsComponent } from './shown-projects/shown-projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjctComponent } from './edit-projct/edit-projct.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyWorkComponent } from './my-work/my-work.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailesComponent,
    UsersComponent,
    PublishedProjectsComponent,
    ShownProjectsComponent,
    AddProjectComponent,
    EditProjctComponent,
    HomeComponent,
    MyProfileComponent,
    ProfileComponent,
    EditProfileComponent,
    MyWorkComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }

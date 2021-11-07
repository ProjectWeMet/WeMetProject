import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailesComponent } from './project-detailes/project-detailes.component';
import { UsersComponent } from './users/users.component';
import { PublishedProjectsComponent } from './published-projects/published-projects.component';
import { ShownProjectsComponent } from './shown-projects/shown-projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjctComponent } from './edit-project/edit-projct.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/home-navbar/navbar.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { CardProjectComponent } from './projects/card-project/card-project.component';
import { LengthStringFormatePipe } from './projects/card-project/lengthStringFormate.pipe';
import { ShowApplyJobPipe } from './projects/card-project/showApplyJob.pipe';
import { DaysBetweenDatesPipe } from './projects/card-project/daysBetweenDates.pipe';



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
    MyWorkComponent,

    UserCardComponent,

    CardProjectComponent,
    LengthStringFormatePipe,
    ShowApplyJobPipe,
    DaysBetweenDatesPipe
    

  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
  ]
})
export class UserDashboardModule { }

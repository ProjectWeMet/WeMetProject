import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJopOfferComponent } from './add-jop-offer/add-jop-offer.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
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
  },
  {
    path:'myWork',
    component:MyWorkComponent
  },
  {
    path:'addJopOffer',
    component:AddJopOfferComponent
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }

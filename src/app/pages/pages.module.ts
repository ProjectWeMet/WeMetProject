import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent,
    

 
 

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
   
   
  ]
})
export class PagesModule { }

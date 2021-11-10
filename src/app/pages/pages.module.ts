import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CardsprojectsComponent } from './home/cardsprojects/cardsprojects.component';
import { LengthStringFormatePipe } from './home/cardsprojects/length-string-formate.pipe';
import { DepartmentWeMetComponent } from './home/department-we-met/department-we-met.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CardsprojectsComponent,
    LengthStringFormatePipe,
    DepartmentWeMetComponent,
    

 
 

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
   
   
  ]
})
export class PagesModule { }

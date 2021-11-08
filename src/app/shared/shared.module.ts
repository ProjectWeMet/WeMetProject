import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
//import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';


@NgModule({
  declarations: [
    

    
    UserNavbarComponent,
    UserFooterComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    NavbarPageComponent,
    FooterPageComponent
    
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatSliderModule,
    MatCheckboxModule
    
    
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NavbarPageComponent,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatCheckboxModule,


    FooterPageComponent,
    UserNavbarComponent,
    UserFooterComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    NavbarPageComponent

    
    



  ]
}
)
export class SharedModule { }

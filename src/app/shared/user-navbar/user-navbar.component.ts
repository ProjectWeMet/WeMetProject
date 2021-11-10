import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  GoToRegister(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['register']);
    }, 2000);
   
  }

  goToProject(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/projects']);
    }, 2000);
   
  }

  GoToUser(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/user']);
    }, 2000);
   
  }

  GoTologin(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['']);
    }, 2000);
   
   
  }

  GoToAddProject(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['user/addJopOffer']);
    }, 2000);
   
   
  }

}

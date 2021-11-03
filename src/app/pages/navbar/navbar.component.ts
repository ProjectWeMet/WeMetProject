import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  GoToContact(){
    this.router.navigate(['home/contact']);
  }
  GoToHome(){
    this.router.navigate(['home']);
  }
  
  GoTologin(){
    this.router.navigate(['']);
  }
  GoToAbout(){
    this.router.navigate(['home/about']);
  }
  GoToRegister(){
    this.router.navigate(['register']);
  }
  GoProject(){
    this.router.navigate(['home/projects']);

  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public UserService:UserDashboardService) { 
    this.UserService.getAllCategory();
    this.UserService.getAllProjects()
  }


  ngOnInit(): void {
  }

}

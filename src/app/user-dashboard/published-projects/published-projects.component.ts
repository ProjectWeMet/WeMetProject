import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-published-projects',
  templateUrl: './published-projects.component.html',
  styleUrls: ['./published-projects.component.css']
})
export class PublishedProjectsComponent implements OnInit {

  constructor(public UserService:UserDashboardService) {
    this.UserService.getPublishedProjects(this.UserService.UserId);
    this.UserService.getAllProjects()
   }

  ngOnInit(): void {
  }

}

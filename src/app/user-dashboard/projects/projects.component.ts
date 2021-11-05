import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { UserDashboardModule } from '../user-dashboard.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  value:number=10;
  constructor(public UserService:UserDashboardService) { 
    this.UserService.getAllCategory();
    this.UserService.getAllProjects()
  }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    // if (value >= 10) {
    //   return Math.round(value / 10) ;
    // }

    return value;
  }

}

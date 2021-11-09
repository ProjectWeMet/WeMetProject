import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-project-detailes',
  templateUrl: './project-detailes.component.html',
  styleUrls: ['./project-detailes.component.css']
})
export class ProjectDetailesComponent implements OnInit {

  constructor(public UserService:UserDashboardService ) { 
  }

  ngOnInit(): void {
    
   
  }

  
}

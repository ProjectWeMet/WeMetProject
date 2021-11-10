import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(public UserService:UserDashboardService) { }

  ngOnInit(): void {
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-we-met',
  templateUrl: './department-we-met.component.html',
  styleUrls: ['./department-we-met.component.css']
})
export class DepartmentWeMetComponent implements OnInit {
  @Input () id:number|undefined;
  @Input () ImageName:string|undefined;
  @Input ()  Title :string|undefined;
 
  constructor(public UserService:UserDashboardService ,private router:Router) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {
  @Input () projectId:number|undefined;
  @Input () fName:string|undefined;
  @Input () lName:string|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () projectDetails:string|undefined;
  @Input () dateOfCreate:string|undefined;
  constructor(public UserService:UserDashboardService ) {
   

   }

  ngOnInit(): void {



  }

}

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
  // modo(value: string){
  //   switch(value) {
  //     case "Latest":
  //        // if modo 1 is selected do something.
  //        break;
  //     case "Oldest":
  //        // if modo 2 is selected do something.
  //        break;
  //     case "LeastViewed":
  //       this.getDateDesc();
  //       break;
  //     case "MostViewed":
  //     // if modo 3 is selected do something.
  //       break;
  //   }
  // }
  chosenMod: string = "Latest";

modo(){
  switch(this.chosenMod) {  
     case "Latest": { 
      this.UserService.getOrderByDateDesc();
      break;
     }
     case "Oldest": { 
      this.UserService.getOrderByDateAsc();
      break;
     }
     case "LeastViewed": { 
      this.UserService.getOrderByCountApplyJobAsc();

        break;
     }
     case "MostViewed": { 
      this.UserService.getOrderByCountApplyJobDesc();

      break;
   }
  }
}

}

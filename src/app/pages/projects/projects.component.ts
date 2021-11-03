import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  value:number=10;
  constructor() { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    // if (value >= 10) {
    //   return Math.round(value / 10) ;
    // }

    return value;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-published-projects',
  templateUrl: './card-published-projects.component.html',
  styleUrls: ['./card-published-projects.component.css']
})
export class CardPublishedProjectsComponent implements OnInit {
  @Input () projectId:number|undefined;
  @Input () isAccept:boolean|undefined;
  @Input () isComplete:boolean|undefined;
  @Input () projectTitle:string|undefined;
  @Input () countApplyJob:number|undefined;
  @Input () dateOfCreate:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }
  ViewDetailes(){
    
  }
}

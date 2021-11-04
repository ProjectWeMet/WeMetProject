import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  Categorys:any=[];
  constructor( private http:HttpClient,private spiner :NgxSpinnerService,private router:Router) { }
  getAllCategory(){debugger
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Category')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Categorys=data;
      // this.toastr.success('Deleted ');
    
    },err=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
}

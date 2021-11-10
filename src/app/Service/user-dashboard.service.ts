import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';



@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  Categorys:any=[];
  Projects:any=[];


  Users:any=[];
  User:any={};

  myWork:any=[];
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private router:Router) { }

  getAllUsers(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Users/GetAllUsers')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Users=data;
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

  getAllCategory(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Category')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Categorys=data;
      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  getAllProjects(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/VeiwAllProjectForUser')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  searchProject(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }

    this.spiner.show();
     this.http.post('https://localhost:44374/api/Project/SearchProject',data,requestOptions)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

  searchUser(data:any){debugger
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }

    this.spiner.show();
     this.http.post('https://localhost:44374/api/Users/SearchUserNotActive',data,requestOptions)
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Users=data;

      //  this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }

 getOrderByDateDesc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByDateDesc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  } 
  getOrderByCountApplyJobDesc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByCountApplyJobDesc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  } 
  getOrderByCountApplyJobAsc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByCountApplyJobAsc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  } 
  getOrderByDateAsc(){
    this.spiner.show();
     this.http.get('https://localhost:44374/api/Project/SearchProjectOrderByDateAsc')
     .subscribe((data:any)=>{
      this.spiner.hide();
      this.Projects=data;

      // this.toastr.success('Deleted ');
    
    },error=>{
      this.spiner.hide();
      // this.toastr.error(' Not Deleted ');
    
    })
  }
  
  
  getUserById(id:number){
    this.spiner.show();
    this.http.get('https://localhost:44374/api/Users/GetUserById/'+id).subscribe((data:any)=>{
      debugger
      this.User=data;
      // console.log(this.data1);
      
    // this.router.navigate(['user/profile']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      // this.toastr.error(err.status);
      // this.router.navigate(['']);
    })
  }

  getMyWorkById(id:number){
    debugger
    this.spiner.show();
    this.http.get('https://localhost:44374/api/MyWork/getAllMyWork/'+id).subscribe((data:any)=>{
      debugger
      this.myWork=data;
      // console.log(this.data1);
      
    // this.router.navigate(['user/myWork']);
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
      // this.toastr.error(err.status);
      // this.router.navigate(['']);
    })
  }
}



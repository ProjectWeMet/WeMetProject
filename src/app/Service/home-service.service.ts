import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }
  // GetAlldepartmentWeMet(){
    //call services
//  return this.http.get('https://localhost:44374/api/departmentWeMet').subscribe((result)=> { 
//    this.data=result,
//    this.spinner.hide();
//    this.toaster.success('Data Retrieved!'); },
//    (error) => this.toaster.error(error.status));
  
//     }
//     uuploadAttachment(file:FormData,id:any){
//       debugger

//       const headerDict = {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//       }
//       const requestOptions = {
//       headers: new HttpHeaders(headerDict),
//       };
//       this.http.post('https://localhost:44374/api/' +'departmentWeMet/upload/',file).subscribe((data1: any) => {
//       this.display_image=data1.imageName;
//       debugger
//       if(data1){
//       console.log(this.display_image);
//       const data2={
//         ImageName:this.display_image.toString(),
//         UserId:id
//         }
//         this.UpdateImage(data2)
//     }
//       }, err => {
      
//       })
//       }

//     uUpdateImage(data3:any){
//       debugger
//       const headerDict = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         }
//         const requestOptions = {
//           headers: new HttpHeaders(headerDict),
//           };
     
//         this.spinner.show();
//       this.http.post('https://localhost:44374/api/Users/UpdateImage',data3,requestOptions).subscribe((data4: any) => {
//         this.spinner.hide();
//     }
//       )
  
    
//     }
}

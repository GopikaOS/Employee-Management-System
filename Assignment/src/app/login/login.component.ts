import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email!:string;
  password!:string;
  userList!:any;
                                         


  constructor(private router: Router,
    private addemployeservice: AuthServiceService,) { }
  
  authenticate(){
    this.addemployeservice.getEmployees().subscribe((res: any) => {
      this.userList = res;
      this.userList.forEach((user1:any) => {
        // const valid = false
        if(user1.email==this.email &&
           user1.password==this.password){ 

          if(user1.Role=="admin"){
            this.router.navigate(['/HomeDepartment']);
          }
          else if(user1.Role=="department"){
            this.router.navigate(['/HomeDepartment']);
  
          }
          else {
            this.router.navigate(['/HomeEmployee',user1]);
          }
        }
     });
    

    })
  }


}

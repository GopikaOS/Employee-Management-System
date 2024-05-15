import { Component } from '@angular/core';
import { Employee } from '../addemployee/addemployee';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedisplay',
  templateUrl: './employeedisplay.component.html',
  styleUrls: ['./employeedisplay.component.css']
})
export class EmployeedisplayComponent {
  employeedisplay !: Employee[];
  fullName? :string | null;
  gender? :string | null;
  id?: any| null;
  dob?: any| null;
  email?: string| null;
  phone?: any| null;
  hometown?: string| null;
  department?: string| null;
  position?: string| null;
  Role?    : string| null;
  password?: string| null;
  
  constructor(private addemployeservice: AuthServiceService){}

ngOnInit(): void {
    this.getmyEmployee();
}
getmyEmployee() {
  this.addemployeservice.getEmployees().subscribe(res => {
    this.employeedisplay = res;
    // console.log(res)
  })
}
}

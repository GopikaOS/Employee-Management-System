import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { Employee } from '../addemployee/addemployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent {
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


  constructor(private addemployeservice: AuthServiceService,
    private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.getmyEmployee();
    this.fullName = this.route.snapshot.paramMap.get('fullName');
    this.gender=this.route.snapshot.paramMap.get('gender');
    this.id =this.route.snapshot.paramMap.get('id');
    this.dob=this.route.snapshot.paramMap.get('dob');
    this.email=this.route.snapshot.paramMap.get('email');
    this.phone=this.route.snapshot.paramMap.get('phone');
    this.hometown=this.route.snapshot.paramMap.get('hometown');
    this.department=this.route.snapshot.paramMap.get('department');
    this.position=this.route.snapshot.paramMap.get('position');
    this.Role=this.route.snapshot.paramMap.get('Role');
    this.password=this.route.snapshot.paramMap.get('password');
    
    
    
  }

  getmyEmployee() {
    this.addemployeservice.getEmployees().subscribe(res => {
      this.employeedisplay = res;
      // console.log(res)
    })
  
}
}

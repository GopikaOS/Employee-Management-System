


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from './addemployee';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddemployeeComponent implements OnInit {

  dismissible = true;
  isAlerrt: boolean = false;

  public empy: Employee = {} as Employee;
  employee!: Employee;
  employeeForm!: FormGroup;
  bsModalRef?: BsModalRef;

  reactiveForm!: FormGroup;
  isEditMode: boolean = false;

  // constructor is making for dependency injection.
  constructor(
    private addemployeservice: AuthServiceService, 
    private router: Router,
    private modalService: BsModalService, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {



    this.employeeForm = new FormGroup({
     
      
    

      id: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.pattern('[0-9]*')]),
      hometown: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });



  }



  onSubmit(employeeForm: FormGroup) {

    console.log(employeeForm)
    if (employeeForm.status === "VALID") {
      const employeeDetails = employeeForm.value as Employee;
      this.addEmployee(employeeDetails);
      const isEditMode = this.route.snapshot.paramMap.get('isEditMode');
      console.log(isEditMode);
    }

  }




  addEmployee(employeeDetails: Employee) {
    if(this.isEditMode){
      this.addemployeservice.updateuser(employeeDetails.id,employeeDetails).subscribe(() => {
        alert("employee Update sucessfully") 
      });

    }

    else{

    this.addemployeservice.createuser(employeeDetails).subscribe((data: Employee) => {
      console.log(data)
      this.dismissible = true;
      alert("employee added sucessfully")
    },
    )
  }
}



  onClosed(): void {
    this.dismissible = !this.dismissible;
  }



}


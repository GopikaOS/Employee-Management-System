import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  getmyuser: any;
  user: any;
  deleteForm!: FormGroup;
onSubmit: any;

  constructor(private addemployeservice: AuthServiceService) {
    this.deleteForm = new FormGroup({
      id: new FormControl(''),  
      

    });
  }
  

  deleteuser() {

    if (confirm("do you want to delete?")){
      const user = {
        id:this.deleteForm.get("id")?.value
      }

      this.addemployeservice.deleteuser(user).subscribe(() => {
        this.getmyuser();

      });
    }
    


  }
}

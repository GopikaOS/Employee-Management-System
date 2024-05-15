import { Component } from '@angular/core';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-home-department',
  templateUrl: './home-department.component.html',
  styleUrls: ['./home-department.component.css']
})
export class HomeDepartmentComponent {

  bsModalRef?: BsModalRef;

  
  dialog: any;
  modalRef: any;
  constructor(private modalService: BsModalService){}
  
  addEmployeeDialog() {
    this.bsModalRef = this.modalService.show(AddemployeeComponent);
  }
  deleteEmployee() {
    this.bsModalRef = this.modalService.show(DeleteEmployeeComponent);
  }
}






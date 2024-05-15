import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { Employee } from '../addemployee/addemployee';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  bsModalRef?: BsModalRef;
  listemployee !: Employee[];
  dialog: any;
  modalRef: any;

  // dataSource: any;
                    //  for filter box
  constructor(private addemployeservice: AuthServiceService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getmyuser();
  }
  getmyuser() {
    this.addemployeservice.getEmployees().subscribe(res => {
      this.listemployee = res;
      // this.dataSource = res;
      console.log(res)

    })


  }
  updateEmployeeDialog(employee: Employee) {
    const initialState: ModalOptions = {
      initialState: {
        employee: employee,
        isEditMode: true
      }

    };
    this.bsModalRef = this.modalService.show(AddemployeeComponent, initialState);
  }



  deleteuser(user: any) {

    if (confirm("do you want to delete?"))
      this.addemployeservice.deleteuser(user).subscribe(() => {
        this.getmyuser();

      });

    
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeDepartmentComponent } from './home-department/home-department.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'HomeDepartment', component: HomeDepartmentComponent},
  { path: 'HomeDepartment/addemployee', component: AddemployeeComponent},
  {path: 'HomeDepartment/deleteemployee',component:DeleteEmployeeComponent},
  {path:'HomeDepartment/listemployee',component:ListemployeeComponent},
  {path:'HomeEmployee',component:HomeEmployeeComponent},
  {path:'HomeEmployee/employeedisplay',component:EmployeedisplayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

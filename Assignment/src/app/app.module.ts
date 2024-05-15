import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddemployeeComponent } from './addemployee/addemployee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HomeDepartmentComponent } from './home-department/home-department.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { FormsModule } from '@angular/forms';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './services/auth/auth-service.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddemployeeComponent,
    DeleteEmployeeComponent,
    HomeDepartmentComponent,
    ListemployeeComponent,
    HomeEmployeeComponent,
    EmployeedisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    AlertModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
   
    ],
  providers: [AuthServiceService, BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

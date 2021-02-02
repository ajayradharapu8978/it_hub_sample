import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '../shared/material.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmployeeLoginstatusComponent } from './employee-loginstatus/employee-loginstatus.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    EmployeeComponent, 
    EmployeeProfileComponent, 
    EmployeeHomepageComponent, 
    EmployeeLoginstatusComponent, 
    NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }

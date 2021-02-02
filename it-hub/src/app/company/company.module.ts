import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '../shared/material.module';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDescriptionComponent } from './projects/project-description/project-description.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';


@NgModule({
  declarations: [
    CompanyComponent,
    AddEmployeeComponent, 
    ViewEmployeesComponent, 
    CompanyProfileComponent, 
    NavbarComponent, 
    ProjectsListComponent, 
    ProjectDescriptionComponent, 
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }

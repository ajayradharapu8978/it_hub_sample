import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyAuthGaurdService } from '../home/company-Service/company-auth-gaurd.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyComponent } from './company.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ProjectDescriptionComponent } from './projects/project-description/project-description.component';
import { ProjectResolver } from './services/project.resolver';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    canActivate: [CompanyAuthGaurdService],
    children: [      
  {
    path: '',
    component: ProjectsListComponent,
    canActivateChild: [CompanyAuthGaurdService]
  },   
  {
    path: 'addProject',
    component: AddProjectComponent,
    canActivateChild: [CompanyAuthGaurdService]
  },
  {
    path: 'projectUrl',
    component: ProjectDescriptionComponent,
    canActivateChild: [CompanyAuthGaurdService],
    resolve: {
      project: ProjectResolver
    }
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
    canActivateChild: [CompanyAuthGaurdService]
  },
  {
    path: 'viewEmployees',
    component: ViewEmployeesComponent,
    canActivateChild: [CompanyAuthGaurdService]
  },
  {
    path: 'companyProfile',
    component: CompanyProfileComponent,
    canActivateChild: [CompanyAuthGaurdService]
  }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProjectResolver]
})
export class CompanyRoutingModule { }

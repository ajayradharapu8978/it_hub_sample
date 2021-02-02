import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAuthGaurdService } from '../home/employee-Service/employee-auth-gaurd.service';

import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmployeeLoginstatusComponent } from './employee-loginstatus/employee-loginstatus.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate: [EmployeeAuthGaurdService],
    children: [      
  {
    path: '',
    component: EmployeeHomepageComponent,
    canActivateChild: [EmployeeAuthGaurdService]
  },      
  {
    path: 'employeeHome',
    component: EmployeeHomepageComponent,
    canActivateChild: [EmployeeAuthGaurdService]
  },
  {
    path: 'viewEmployeeStatus',
    component: EmployeeLoginstatusComponent,
    canActivateChild: [EmployeeAuthGaurdService]
  },
  {
    path: 'employeeProfile',
    component: EmployeeProfileComponent,
    canActivateChild: [EmployeeAuthGaurdService]
  }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

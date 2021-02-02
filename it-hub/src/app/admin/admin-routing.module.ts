import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../home/core/services/auth-guard.service';
import { AddCompaniesComponent } from './add-companies/add-companies.component';
import { HomeComponent } from './admin-layout/home/home.component';
import { AdminComponent } from './admin.component';
import { ViewCompaniesComponent } from './view-companies/view-companies.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [      
  {
    path: '',
    canActivateChild: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'viewCompanies',
    canActivateChild: [AuthGuardService],
    component: ViewCompaniesComponent
  },
  {
    path: 'viewEmployees',
    canActivateChild: [AuthGuardService],
    component: ViewEmployeesComponent
  }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

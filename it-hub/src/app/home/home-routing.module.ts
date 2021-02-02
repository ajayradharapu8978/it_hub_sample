import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { NoAuthGuardService } from './core/services/no-auth-guard.service';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [      
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'adminLogin',
    canActivate: [NoAuthGuardService],
    component: AdminLoginComponent
  },
  {
    path: 'employeeLogin',
    canActivate: [NoAuthGuardService],
    component: EmployeeLoginComponent
  },
  {
    path: 'companyLogin',
    canActivate: [NoAuthGuardService],
    component: CompanyLoginComponent
  }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

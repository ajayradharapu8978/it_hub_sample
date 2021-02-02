import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: ()=> import('../app/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'company',
    loadChildren: ()=> import('../app/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'employee',
    loadChildren: ()=> import('../app/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: '',
    loadChildren: ()=> import('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

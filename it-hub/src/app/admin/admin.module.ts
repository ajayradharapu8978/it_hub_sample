import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '../shared/material.module';
import {EditCompanyService} from '../admin/services/edit-company.service'
import { AdminRoutingModule } from './admin-routing.module';
import { AddCompaniesComponent } from './add-companies/add-companies.component';
import { ViewCompaniesComponent } from './view-companies/view-companies.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AdminComponent } from './admin.component';
import { TokenInterceptorService } from '../home/core/services/token-interceptor.service';
import { CoreModule } from '../home/core/core.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NavComponent } from './admin-layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './admin-layout/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CompanyChartComponent } from './admin-layout/charts/company-chart/company-chart.component';
import { EmployeesChartComponent } from './admin-layout/charts/employees-chart/employees-chart.component';


@NgModule({
  declarations: [
    AddCompaniesComponent,
    ViewCompaniesComponent,
    ViewEmployeesComponent, 
    AdminComponent, 
    NavComponent, 
    HomeComponent, 
    CompanyChartComponent, 
    EmployeesChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    NgxSkeletonLoaderModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
    entryComponents: [
      AddCompaniesComponent
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true,

    },
    EditCompanyService
  ],
  bootstrap: [ViewCompaniesComponent]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '../shared/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { IndexComponent } from './index/index.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    AdminLoginComponent,
    CompanyLoginComponent,
    EmployeeLoginComponent,
    IndexComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NoAuthGuardService } from './services/no-auth-guard.service';
import { CompanyAuthGaurdService } from '../company-Service/company-auth-gaurd.service';
import { EmployeeAuthGaurdService } from '../employee-Service/employee-auth-gaurd.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    JwtService,
    TokenInterceptorService,
    AuthGuardService,
    NoAuthGuardService,
    CompanyAuthGaurdService,
    EmployeeAuthGaurdService
  ]
})
export class CoreModule { }

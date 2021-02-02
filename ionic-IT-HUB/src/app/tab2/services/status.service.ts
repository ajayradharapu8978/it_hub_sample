import { Employee } from './../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginStatus } from "../models/employeeLoginStatus.model";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  employees: Employee;
  loginStatus: LoginStatus;

  readonly baseURL = 'http://localhost:5680/employee';

  constructor(private http: HttpClient) { }

  // postStatus(loginStatus: LoginStatus) {
  //   return this.http.post(this.baseURL + `/addLoginStatusdata`, loginStatus);
  // }

  getLoginStatusList(id: any) {
    return this.http.get(this.baseURL + `/showLoginStatusData/${id}`);
  }

  // getEmployeeProfile(id: any) {
  //   return this.http.get(this.baseURL + `/employeeProfile/${id}`);
  // }

  // putEmployeeStatus(id: any, status: LoginStatus) {
  //   return this.http.put(this.baseURL + `/updateEmployeeLoginStatus/${id}`, status);
  // }

  // putEmployeeProfile(id: any, employee: Employee) {
  //   return this.http.put(this.baseURL + `/updateEmployeeProfile/${id}`, employee);
  // }
}
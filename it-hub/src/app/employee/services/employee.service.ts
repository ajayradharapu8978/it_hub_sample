import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginStatus } from "../models/employeeLoginStatus.model";
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  statuss: LoginStatus[];
  employees: Employee[];

  readonly baseURL = 'http://localhost:5680/employee';

  constructor(private http: HttpClient) { }
  
  postStatus(statuss: LoginStatus) {
    return this.http.post(this.baseURL + `/addLoginStatusdata`, statuss);
  }

  getLoginStatusList(id: any) {
    return this.http.get(this.baseURL + `/showLoginStatusData/${id}`);
  }

  getEmployeeProfile(id: any) {
    return this.http.get(this.baseURL + `/employeeProfile/${id}`);
  }
  
  putEmployeeStatus(id: any, status: LoginStatus) {
    return this.http.put(this.baseURL + `/updateEmployeeLoginStatus/${id}`, status);
  }
  
  putEmployeeProfile(id: any, employee: Employee) {
    return this.http.put(this.baseURL + `/updateEmployeeProfile/${id}`, employee);
  }
}

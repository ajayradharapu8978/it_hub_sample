import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];

  readonly baseURL = 'http://localhost:5680/admin';

  constructor(private http: HttpClient) { }

  getEmployeesList() {
    return this.http.get(this.baseURL + `/showemployeesdata`);
  }
}

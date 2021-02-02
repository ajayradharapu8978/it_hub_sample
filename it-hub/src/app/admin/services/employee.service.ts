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
  
  getEditEmoplyeeList(id: any) {
    return this.http.get(this.baseURL + `/editEmployee/${id}`);
  }

  getDeleteEmployeeList(id: any) {
    return this.http.delete(this.baseURL + `/deleteEmployee/${id}`);
  }

}

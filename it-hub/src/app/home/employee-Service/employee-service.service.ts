import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employees: Employee[];

  readonly baseURL = 'http://localhost:5680/employee';

  constructor(private http: HttpClient) { }

  employeesignin(employee: Employee) {
    return this.http.post(this.baseURL + `/signin`, employee);
  }
}

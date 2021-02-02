import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from "../models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companies: Company[];

  readonly baseURL = 'http://localhost:5680/admin';

  constructor(private http: HttpClient) { }

  postCompany(company: Company) {
    return this.http.post(this.baseURL + `/addcompanydata`, company);
  }

  getCompaniesList() {
    return this.http.get(this.baseURL + `/showcompaniesdata`);
  }

  // getCoursesList() {
  //   return this.http.get(this.baseURL + `/showCourses`);
  // }

//   putEmployee(emp: Employee) {
//     return this.http.put(this.baseURL + `/${emp._id}`, emp);
//   }

//   deleteEmployee(_id: string) {
//     return this.http.delete(this.baseURL + `/${_id}`);
//   }
}

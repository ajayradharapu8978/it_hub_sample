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

  getEditCompanyList(id: any) {
    return this.http.get(this.baseURL + `/editCompany/${id}`);
  }

  getDeleteCompanyList(id: any) {
    return this.http.delete(this.baseURL + `/deleteCompany/${id}`);
  }

  putCompany(id: any, company: Company) {
    return this.http.put(this.baseURL + `/updateCompany/${id}`, company);
  }

}

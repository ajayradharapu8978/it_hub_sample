import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  

  companies: Company[];

  readonly baseURL = 'http://localhost:5680/company';

  constructor(private http: HttpClient) { }

  getCompanyNamesList() {
    return this.http.get(this.baseURL + `/showcompanyNamesData`);
  }

  getCompanyProfile(id: any) {
    return this.http.get(this.baseURL + `/companyProfile/${id}`);
  }

  putCompanyProfile(id: any, company: Company) {
    return this.http.put(this.baseURL + `/updateProfile/${id}`, company);
  }

}

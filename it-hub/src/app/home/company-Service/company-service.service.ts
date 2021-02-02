import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  companies: Company[];

  readonly baseURL = 'http://localhost:5680/company';

  constructor(private http: HttpClient) { }

  companysignin(company: Company) {
    return this.http.post(this.baseURL + `/signin`, company);
  }

}

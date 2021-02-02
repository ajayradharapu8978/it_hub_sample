import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  companyForm: FormGroup;
  profile;
  id;

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = window.localStorage.getItem("id");
    this.refreshEmployeesList();
    this.companyForm = this.formBuilder.group({
      company: ['', Validators.required],
      Category: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  refreshEmployeesList() {
    this.companyService.getCompanyProfile(this.id).subscribe((res) => {
      this.companyService.companies = res as Company[];
      this.profile = this.companyService.companies
      this.companyForm = this.formBuilder.group({
        company: [this.profile.company, Validators.required],
        Category: [this.profile.Category, Validators.required],
        email: [this.profile.email, Validators.required],
        password: [this.profile.password, Validators.required]
      })
    });
  }

  onUpdate() {
    if (this.companyForm.invalid) {
      return;
    }
    this.companyService.putCompanyProfile(this.profile._id, this.companyForm.value).pipe(first()).subscribe((res) => {
      this.snackBar.open("Updated Successfilly", 'Ok', {
        duration: 3000
      });
    });
  }

}

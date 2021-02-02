import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Company } from 'src/app/company/models/company.model';
import { CompanyServiceService } from '../company-Service/company-service.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss'],
  providers: [CompanyServiceService]
})
export class CompanyLoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  dataSource;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private CompanyServiceService: CompanyServiceService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClick() {
    this.CompanyServiceService.companysignin(this.loginForm.value).subscribe((data) => {
      this.CompanyServiceService.companies = data as Company[];
      this.dataSource = data;
      const companyName = this.dataSource.company;
      const Id = this.dataSource.id;
      window.localStorage.setItem("company", companyName);
      window.localStorage.setItem("id", Id);
      this.router.navigate(['/company']);
    },
      err => this.errorHandler(err, "Ooops something went Wrong!"));
  }

  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }


}

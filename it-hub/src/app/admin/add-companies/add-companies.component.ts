import { AfterViewInit, Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CompanyService } from '../services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditCompanyService } from '../services/edit-company.service';

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss'],
  providers: [CompanyService, EditCompanyService]
})
export class AddCompaniesComponent implements  OnInit {
  companyregisterForm: FormGroup;

  submitted = false;
  Savebutton = true;
  Updatebutton = false;
  editDetails;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.companyregisterForm = this.formBuilder.group({
      company: ['', Validators.required],
      Category: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.companyregisterForm.invalid) {
      return;
    }
    this.companyService.postCompany(this.companyregisterForm.value).pipe(first()).subscribe((res) => {
      this.snackBar.open("Company added Successfilly", 'Ok', {
        duration: 3000
      });
    },
      err => this.errorHandler(err, "Ooops something went Wrong!")
    );
  }

  EditDetails(){
    this.editDetails = EditCompanyService.privateCompany;
    this.companyregisterForm = this.formBuilder.group({
      company: [this.editDetails.company, Validators.required],
      Category: [this.editDetails.Category, Validators.required],
      email: [this.editDetails.email, Validators.required],
      password: [this.editDetails.password, Validators.required]
    })
    this.Savebutton = false;
    this.Updatebutton = true;
  }

  onUpdate() {
    this.submitted = true;
    if (this.companyregisterForm.invalid) {
      return;
    }
    this.companyService.putCompany(this.editDetails._id,this.companyregisterForm.value).pipe(first()).subscribe((res) => {
      this.snackBar.open("Updated Successfilly", 'Ok', {
        duration: 3000
      });
    },
      err => this.errorHandler(err, "Ooops something went Wrong!")
    );
    this.companyregisterForm = this.formBuilder.group({
      company: ['', Validators.required],
      Category: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }
}

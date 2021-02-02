import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from '../services/employee.service';
import { Company } from "../models/company.model";
import { CompanyService } from '../services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  providers:[
    EmployeeService,
    CompanyService
  ]
})
export class AddEmployeeComponent implements OnInit {
  employeeregisterForm : FormGroup;
  
  submitted = false;
  isLoading = false;

  companyNames;
  genderLists=[
    {
      name:"Male",
      value: "male"
    },
    {
      name:"Female",
      value: "female"
    },
    {
      name:"Other",
      value: "other"
    },
  ]

  constructor(
    private formBuilder:FormBuilder,
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private snackBar: MatSnackBar
    ){  }

    CompanyId;
    imagePreview;

  ngOnInit() : void{
    this.CompanyId = window.localStorage.getItem("id");
    this.refreshCompaniesNamesList();
    this.employeeregisterForm = this.formBuilder.group({
      EmployeeID: ['', Validators.required],
      Name: ['', Validators.required],
      company: [this.CompanyId, Validators.required],
      jobStatus: ['', Validators.required],
      DOB: ['', Validators.required],
      Phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      file: [this.imagePreview, Validators.required]
    })
  }

refreshCompaniesNamesList() {
  this.companyService.getCompanyNamesList().subscribe((res) => {
    this.companyService.companies = res as Company[];
    this.companyNames=this.companyService.companies
  });
}

onReset(){
  this.isLoading = false;
}

onImagePick($event){
  let file = $event.target.files[0];
  this.employeeregisterForm.controls['file'].setValue(file ? file : '');
  const reader = new FileReader();
  reader.onload = ()=>{
    this.imagePreview = reader.result;
  }
  reader.readAsDataURL(file);
}

onSubmit(){
  this.submitted = true;
  this.isLoading = true;
  if(this.employeeregisterForm.invalid){
    this.isLoading = false;
    return;
  }  
  this.employeeService.postEmployee(this.employeeregisterForm.value).pipe(first()).subscribe((res) => {
  this.isLoading = false;
  this.snackBar.open("Added Successfully", 'Ok', {
    duration: 3000
  });
},
err => this.errorHandler(err, "Ooops something went Wrong!")
)
}

private errorHandler(error, message) {
  console.error(error);
  this.snackBar.open(message, 'Error', {
    duration: 2000
  });
}


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeProfileComponent implements OnInit {

  EmployeeForm: FormGroup;
  employeeId;
  Employees;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.employeeId = window.localStorage.getItem("employeeId");
    this.EmployeeForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required]
    })
    this.refreshdata();
  }

  refreshdata() {
    this.employeeService.getEmployeeProfile(this.employeeId).subscribe(data => {
      this.employeeService.employees = data as Employee[];
      this.Employees = this.employeeService.employees
      window.localStorage.setItem("employeeName", this.Employees.Name);
      this.EmployeeForm = this.formBuilder.group({
        Name: [this.Employees.Name, Validators.required],
        Phone: [this.Employees.Phone, Validators.required],
        email: [this.Employees.email, Validators.required],
        password: [this.Employees.password, Validators.required],
        address: [this.Employees.address, Validators.required]
      })
    });
  }

  onUpdate() {
    this.employeeService.putEmployeeProfile(this.Employees._id, this.EmployeeForm.value).pipe(first()).subscribe((res) => {
      this.snackBar.open("Saved Successfilly", 'Ok', {
        duration: 3000
      });
    });
  }

}

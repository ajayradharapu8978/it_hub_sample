import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/models/employee.model';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import { EmployeeServiceService } from '../employee-Service/employee-service.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss'],
  providers: [EmployeeServiceService]
})
export class EmployeeLoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  dataSource;
  
  id;
  EmpID;
  logout;
  currentdate = new Date();
  statusForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private statuService: EmployeeService,
    private snackBar: MatSnackBar,
    private employeeService: EmployeeServiceService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private StatusValidations(){
    this.statusForm = this.formBuilder.group({
      EmployeeID: [this.EmpID, Validators.required],
      Name: [this.id, Validators.required],
      date: [this.currentdate.getDate()+"/"+(this.currentdate.getMonth()+1)+"/"+this.currentdate.getFullYear(), Validators.required],
      login: [this.currentdate.getHours()+":"+(this.currentdate.getMinutes())+":"+this.currentdate.getSeconds(), Validators.required],
      logout: ['Active Now', Validators.required]
    })
    this.addStatus();
  }
  
  addStatus() {    
    this.statuService.postStatus(this.statusForm.value).subscribe(resp => {
      this.logout = resp;
      this.logout = this.logout._id;
      window.localStorage.setItem("logout", this.logout);
    })
  }


  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClick() {
    this.employeeService.employeesignin(this.loginForm.value).subscribe((data) => {
      this.employeeService.employees = data as Employee[];
      this.dataSource = data;
      const Name = this.dataSource.Name;
      this.EmpID  = this.dataSource.EmployeeID;
      this.id  = this.dataSource.id;
      window.localStorage.setItem("empId", this.EmpID);
      window.localStorage.setItem("employeeName", Name);
      window.localStorage.setItem("employeeId", this.id);
      this.StatusValidations();
      this.router.navigate(['/employee']);
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

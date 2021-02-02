import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../services/employee.service";
import { Employee } from "../models/employee.model";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss'],
  providers:[EmployeeService]
})
export class ViewEmployeesComponent implements OnInit {


  displayedColumns: string[] = ['EmployeeID', 'Name', 'company', 'jobStatus', 'DOB', 'Phone', 'email', 'gender', 'address', '_id'];

  Employees;

  isLoading = false;

  constructor(private employeeService : EmployeeService,
    private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.refreshEmployeesList();
  }

  refreshEmployeesList() {
  this.isLoading = true;
    this.employeeService.getEmployeesList().subscribe((res) => {
      setTimeout(() => {
        this.isLoading = false;
        this.employeeService.employees = res as Employee[];
        this.Employees=this.employeeService.employees      
        this.Employees = this.Employees.docs
      }, 1000/2);
    });
  }
  
  editEmployee(id: any){
    this.employeeService.getEditEmoplyeeList(id).subscribe(data =>{
      this.refreshEmployeesList();
    },
    err => this.errorHandler(err, "Ooops something went Wrong!")
    )
  }

  deleteEmployee(id: any){
    this.employeeService.getDeleteEmployeeList(id).subscribe(data =>{
      this.snackBar.open("Deleted Successfully", 'Ok', {
        duration: 3000
      });
      this.refreshEmployeesList();
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

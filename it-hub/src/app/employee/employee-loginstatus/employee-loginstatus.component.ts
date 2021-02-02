import { Component, OnInit } from '@angular/core';
import { LoginStatus } from '../models/employeeLoginStatus.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-loginstatus',
  templateUrl: './employee-loginstatus.component.html',
  styleUrls: ['./employee-loginstatus.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeLoginstatusComponent implements OnInit {


  displayedColumns: string[] = [ 'date', 'login', 'logout'];

  Employees;
  id;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.id = window.localStorage.getItem("employeeId");
    this.refreshEmployeesList();
  }

  refreshEmployeesList() {
    this.employeeService.getLoginStatusList(this.id).subscribe((res) => {
      this.employeeService.statuss = res as LoginStatus[];
      this.Employees=this.employeeService.statuss;
    });
  }

}

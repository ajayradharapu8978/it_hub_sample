import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-homepage',
  templateUrl: './employee-homepage.component.html',
  styleUrls: ['./employee-homepage.component.scss']
})
export class EmployeeHomepageComponent implements OnInit {

  Name;

  constructor() { }

  ngOnInit(): void {
    this.Name = window.localStorage.getItem("employeeName")
  }

}

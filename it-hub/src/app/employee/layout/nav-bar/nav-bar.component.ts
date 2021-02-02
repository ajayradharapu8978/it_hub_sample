import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentdate = new Date();
  logout = this.currentdate.getHours()+":"+(this.currentdate.getMinutes()+1)+":"+this.currentdate.getSeconds()
  form : FormGroup;

  constructor(private router: Router,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      logout: [this.logout, Validators.required]
    })
  }

  logOut(){
    this.employeeService.putEmployeeStatus(window.localStorage.getItem("logout"), this.form.value).subscribe(data=>{
      window.localStorage.removeItem("employeeId");
      window.localStorage.removeItem("logout");
      window.localStorage.removeItem("employeeName");
      this.router.navigate(['/employeeLogin']);
    })
  }

}

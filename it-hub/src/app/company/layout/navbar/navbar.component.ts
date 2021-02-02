import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  companyName;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.companyName = window.localStorage.getItem("company");    
  }

  logOut(){
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("company");
    this.router.navigate(['/companyLogin']);
  }

}

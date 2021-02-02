import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthGaurdService implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem("employeeId")) {
      return true;
    }
    else {
      this.router.navigate(['/employeeLogin'])
      return false;
    }
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}

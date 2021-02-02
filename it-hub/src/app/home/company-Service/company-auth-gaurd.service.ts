import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyAuthGaurdService implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem("id")) {
      return true;
    }
    else {
      this.router.navigate(['/companyLogin'])
      return false;
    }
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}

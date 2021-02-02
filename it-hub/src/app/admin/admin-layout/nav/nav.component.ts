import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { JwtService } from 'src/app/home/core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    links=[
      {
        name: 'Home',
        url: '/admin',
        icon: 'house'
      },
      {
        name: 'View Companies',
        url: 'viewCompanies',
        icon: 'business'
      },
      {
        name: 'View Employees',
        url: 'viewEmployees',
        icon: 'people'
      }
    ]
  

  constructor(private breakpointObserver: BreakpointObserver,
    private jwtService: JwtService,
    private router: Router) {}

  ngOnInit(): void {
  }

  logout() {
    this.jwtService.destroyToken();
    this.router.navigate(['/adminLogin']);
  }

}

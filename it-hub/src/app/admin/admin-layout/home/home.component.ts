import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Companies', link: '/admin/viewCompanies', image: '../../../../assets/Business_plan_re_0v81.jpg', cols: 2, rows: 1 },
          { title: 'Employees', link: '/admin/viewEmployees', image: '../../../../assets/Hire_re_gn5j.jpg', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Companies', link: '/admin/viewCompanies', image: '../../../../assets/Business_plan_re_0v81.jpg', cols: 1, rows: 1 },
        { title: 'Employees', link: '/admin/viewEmployees', image: '../../../../assets/Hire_re_gn5j.jpg', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
// import { ChartComponent } from 'smart-webcomponents-angular/chart';

@Component({
  selector: 'app-company-chart',
  templateUrl: './company-chart.component.html',
  styleUrls: ['./company-chart.component.scss']
})
export class CompanyChartComponent implements AfterViewInit, OnInit {
  
//   @ViewChild('chart', { read: ChartComponent, static: false }) chart: ChartComponent;

//   source = [
//     { Browser: 'Chrome', Share: 68.95 }, 
//     { Browser: 'Firefox', Share: 10.67 }, 
//     { Browser: 'Internet Explorer', Share: 6.42 }, 
//     { Browser: 'Safari', Share: 5.35 }, 
//     { Browser: 'Edge', Share: 4.2 }, 
//     { Browser: 'Other', Share: 4.67 }
//   ];
//   dataSource = this.source;
//   seriesGroups = [
//       {
//           type: 'pie',
//           showLabels: true,
//           series: [
//               {
//                   dataField: 'Share',
//                   displayText: 'Browser',
//                   labelRadius: 120,
//                   initialAngle: 15,
//                   radius: 170,
//                   centerOffset: 0,
//                   formatFunction: function (value) {
//                       if (isNaN(value)) {
//                           return value;
//                       }
//                       return parseFloat(value) + '%';
//                   },
//                   useGradientColors: false
//               }
//           ]
//       }
//   ];

  ngOnInit(): void {
      // onInit code.
  }

  ngAfterViewInit(): void {
      // afterViewInit code.
      this.init();
  }

  init(): void {
      // init code.
  }
}
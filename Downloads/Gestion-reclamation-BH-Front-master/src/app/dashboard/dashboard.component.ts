import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    new Chartist.LineChart('#lineChart', {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[12, 9, 7, 8, 5]]
    }, {
      fullWidth: true,
      chartPadding: { right: 40 }
    });
  }
}

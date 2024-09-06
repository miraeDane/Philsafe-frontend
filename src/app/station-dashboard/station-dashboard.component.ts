// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-station-dashboard',
//   templateUrl: './station-dashboard.component.html',
//   styleUrls: ['./station-dashboard.component.css']
// })
// export class StationDashboardComponent {}

import { Component, OnInit, Inject } from '@angular/core';
import { StationDashboardService } from '../station-dashboard.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-station-dashboard',
  templateUrl: './station-dashboard.component.html',
  styleUrls: ['./station-dashboard.component.css'],
  providers: [StationDashboardService] // Ensure the service is provided
})
export class StationDashboardComponent implements OnInit {
  dailyReports: number = 0;
  weeklyReports: number = 0;
  monthlyReports: number = 0;
  annualReports: number = 0;
  chart: any;

  constructor(@Inject(StationDashboardService) private stationDashboardService: StationDashboardService) {}

  ngOnInit(): void {
    this.fetchReportData();
  }

  fetchReportData(): void {
    this.stationDashboardService.getReportData().subscribe((data: { dailyReports: number; weeklyReports: number; monthlyReports: number; annualReports: number; chartData: any; }) => {
      this.dailyReports = data.dailyReports;
      this.weeklyReports = data.weeklyReports;
      this.monthlyReports = data.monthlyReports;
      this.annualReports = data.annualReports;
      this.createChart(data.chartData);
    }, (error: any) => {
      console.error('Error fetching report data:', error);
    });
  }

  createChart(chartData: any): void {
    if (!chartData || !chartData.labels || !chartData.data) {
      console.error('Invalid chart data:', chartData);
      return;
    }

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Reports',
          data: chartData.data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
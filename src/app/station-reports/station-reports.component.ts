import { Component, OnInit } from '@angular/core';
import { StationReportsService } from '../station-reports.service';

@Component({
  selector: 'app-station-reports',
  templateUrl: './station-reports.component.html',
  styleUrls: ['./station-reports.component.css']
})
export class StationReportsComponent implements OnInit {
  reports: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private reportsService: StationReportsService) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  // Fetch nationwide reports (you can change to other service methods if required)
  fetchReports(): void {
    this.reportsService.getNationwideReports().subscribe({
      next: (data) => {
        this.reports = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching reports';
        this.loading = false;
      }
    });
  }
}

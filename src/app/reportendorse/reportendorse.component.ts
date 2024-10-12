import { Component } from '@angular/core';

@Component({
  selector: 'app-reportendorse',
  templateUrl: './reportendorse.component.html',
  styleUrl: './reportendorse.component.css'
})
export class ReportendorseComponent {
  reportData: { id: number, name: string }[] = []; // Property to hold report data
  nextId: number = 1; // To keep track of the next report ID
  newReportName: string = ''; // Property to bind new report name input

  constructor() {
    this.loadReports(); // Load reports on initialization
  }

  loadReports() {
    // Simulated method to load initial reports
    this.reportData = [
      { id: this.nextId++, name: 'Report 1' },
      { id: this.nextId++, name: 'Report 2' }
    ];
  }

  addReport() {
    // Method to add a new report
    if (this.newReportName) {
      this.reportData.push({ id: this.nextId++, name: this.newReportName });
      this.newReportName = ''; // Clear input after adding
    }
  }

  removeReport(id: number) {
    // Method to remove a report by ID
    this.reportData = this.reportData.filter(report => report.id !== id);
  }
}

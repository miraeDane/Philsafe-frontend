import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IReport, StationReportsService } from '../station-reports.service';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-station-reports',
  templateUrl: './station-reports.component.html',
  styleUrls: ['./station-reports.component.css']
})
export class StationReportsComponent implements OnInit {
  reportsForm!:FormGroup;
  isLoading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  reports: IReport[] = []; // Added for station data if you need it later
  previewUrl: string | ArrayBuffer | null = null;

  citizenID: string | null = null;
  reportID: string | null = null;
  // accountID: string | null = null;
 
  constructor(
    private fb: FormBuilder,
    private reportsService: StationReportsService,
    private ReportService: ReportService,
    private router: Router,) {}

  ngOnInit(): void {
    this.fetchReports();
    this.reportsForm = this.fb.group({
      // firstName: ['', Validators.required],
      // middleName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // dateOfBirth: ['', Validators.required], // New field
      // sex: ['', Validators.required], // New field
      // civilStatus: ['', Validators.required], // New field 
    });
  } 
  // Alternative fetch function for jurisdictions or stations (if needed)
  fetchReports(): void {
    this.reportsService.getReports().subscribe(
      (response: any) => {
        console.log('Raw response:', response);
        if (Array.isArray(response)) {
          this.reports = response;
          console.log('Fetched reports:', this.reports); // Debugging the fetched stations
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      (error) => {
        console.error('Error fetching reports:', error);
        alert('Failed to load reports. Please try again.');
      }
    );
    }
    onSubmit() {
      console.log(this.reportsForm.value)
      
    }
}
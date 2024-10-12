// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { CaseQueueService } from '../case-queue.service';
// import { Router } from '@angular/router';
// import { IReport, CaseService } from '../case.service';

// @Component({
//   selector: 'app-station-case-queue',
//   templateUrl: './station-case-queue.component.html',
//   styleUrl: './station-case-queue.component.css'
// })
// export class StationCaseQueueComponent {
//   reportsForm!: FormGroup;
//   isLoading = false;
//   successMessage: string | null = null;
//   errorMessage: string | null = null;
//   // reports: IReport[] = []; // Added for station data if you need it later
//   previewUrl: string | ArrayBuffer | null = null;
//   reports: IReport[] = [];


//   constructor(
//     private fb: FormBuilder,
//     private CaseQueueService: CaseQueueService,
//     private caseService: CaseService,
//     private router: Router,) { }

//   ngOnInit(): void {
//     this.fetchReports();
//   }


//   // Alternative fetch function for jurisdictions or stations (if needed)
//   fetchReports(): void {
//     this.CaseQueueService.getReports().subscribe(
//       (response: any) => {
//         console.log('Raw response:', response);
//         if (Array.isArray(response)) {
//           this.reports = response;
//           console.log('Fetched reports:', this.reports); // Debugging the fetched stations
//         } else {
//           console.error('Unexpected response format:', response);
//         }
//       },
//       (error) => {
//         console.error('Error fetching reports:', error);
//         alert('Failed to load reports. Please try again.');
//       }
//     );
//   }
//   onSubmit() {
//     console.log(this.reportsForm.value)
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CaseQueueService } from '../case-queue.service';
// import { Router } from '@angular/router';
// import { IReport, CaseService } from '../case.service';

// @Component({
//   selector: 'app-station-case-queue',
//   templateUrl: './station-case-queue.component.html',
//   styleUrls: ['./station-case-queue.component.css']
// })
// export class StationCaseQueueComponent implements OnInit {
//   reportsForm!: FormGroup; // The form group for the report submission
//   isLoading = false;
//   successMessage: string | null = null;
//   errorMessage: string | null = null;
//   previewUrl: string | ArrayBuffer | null = null;
//   reports: IReport[] = []; // Array to hold fetched reports

//   constructor(
//     private fb: FormBuilder,
//     private CaseQueueService: CaseQueueService,
//     private caseService: CaseService,
//     private router: Router
//   ) {}

//   // Initialize the form and fetch reports
//   ngOnInit(): void {
//     this.reportsForm = this.fb.group({
//       // If your form expects fields, you can add them here
//       report_Id: ['', Validators.required],
//       type: ['', Validators.required],
//       complainant: ['', Validators.required],
//       dateReceived: ['', Validators.required]
//     });
//     this.fetchReports();
//   }

//   // Fetch reports from the backend service
//   fetchReports(): void {
//     this.CaseQueueService.getReports().subscribe(
//       (response: any) => {
//         console.log('Raw response:', response);
//         if (Array.isArray(response)) {
//           this.reports = response; // Assign fetched reports to the array
//           console.log('Fetched reports:', this.reports);
//         } else {
//           console.error('Unexpected response format:', response);
//         }
//       },
//       (error) => {
//         console.error('Error fetching reports:', error);
//         this.errorMessage = 'Failed to load reports. Please try again.';
//       }
//     );
//   }

//   // Handles form submission (could be used for report creation or updates)
//   onSubmit(): void {
//     if (this.reportsForm.valid) {
//       console.log('Form Submitted:', this.reportsForm.value);
//       // Add your submission logic here, e.g., call a service to save data
//     } else {
//       console.error('Form is invalid');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaseQueueService } from '../case-queue.service';
import { Router } from '@angular/router';
import { IReport, CaseService } from '../case.service';

@Component({
  selector: 'app-station-case-queue',
  templateUrl: './station-case-queue.component.html',
  styleUrls: ['./station-case-queue.component.css']
}) 
export class StationCaseQueueComponent implements OnInit {
  reportsForm!: FormGroup;  // Form group for the report submission
  isLoading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  reports: IReport[] = [];  // Array to hold fetched reports

  constructor(
    private fb: FormBuilder,
    private caseQueueService: CaseQueueService,  // Corrected casing of service name
    private caseService: CaseService,
    private router: Router
  ) {}

  // Initialize the form and fetch reports
  ngOnInit(): void {
    this.reportsForm = this.fb.group({
      // Define form controls with validators
      reportID: ['', Validators.required],
      type: ['', Validators.required],
      complainant: ['', Validators.required],
      dateReceived: ['', Validators.required]
    });
    this.fetchReports();  // Load reports on component initialization
  }

  // Fetch reports from the backend service
  fetchReports(): void {
    this.isLoading = true;  // Set loading state to true
    this.caseQueueService.getReports().subscribe(
      (response) => {  // Removed strong typing to avoid type mismatch
        console.log('Raw response:', response);
        if (Array.isArray(response)) {
          this.reports = response as IReport[];  // Cast response to IReport array
          console.log('Fetched reports:', this.reports);
        } else {
          console.error('Unexpected response format:', response);
          this.errorMessage = 'Unexpected response from server.';
        }
        this.isLoading = false;  // Loading complete
      },
      (error) => {
        console.error('Error fetching reports:', error);
        this.errorMessage = 'Failed to load reports. Please try again.';
        this.isLoading = false;  // Loading complete
      }
    );
  }

  // Handles form submission (could be used for report creation or updates)
  onSubmit(): void {
    this.successMessage = null;  // Reset success message before form submission
    this.errorMessage = null;    // Reset error message before form submission

    if (this.reportsForm.valid) {
      console.log('Form Submitted:', this.reportsForm.value);
      
      // Add your form submission logic here, for example:
    //  this.caseQueueService.submitReport(this.reportsForm.value).subscribe(...);
      
      // Simulating success response
      this.successMessage = 'Report successfully submitted!';
    } else {
      this.errorMessage = 'Form is invalid. Please check the fields and try again.';
    }
  }

  // Optional: If using for file/image preview
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }
}

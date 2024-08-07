import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-narrative-of-incident',
  templateUrl: './narrative-of-incident.component.html',
  styleUrls: ['./narrative-of-incident.component.css']
})
export class NarrativeOfIncidentComponent {
  incidentForm: FormGroup; // Form group for the incident report
  files: File[] = []; // Array to hold uploaded files
  signature: File | null = null; // Variable to hold the signature file
  errorMessage: string = ''; // Variable to hold error messages

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.incidentForm = this.fb.group({
      date: ['', Validators.required], // Date is required
      time: ['', Validators.required], // Time is required
      place: ['', Validators.required], // Place is required
      province: ['', Validators.required], // Province is required
      narrative: ['', Validators.required], // Narrative is required
      checkbox: [false, Validators.requiredTrue] // Checkbox must be checked
    });
  }

  // Handle file input changes for general files
  onFileChange(event: any) {
    this.files = Array.from(event.target.files); // Store the uploaded files
  }

  // Handle file input changes for the signature
  onSignatureChange(event: any) {
    this.signature = event.target.files[0]; // Store the uploaded signature
  }

  // Submit the form
  submitForm() {
    // Check if the form is valid and all required files are uploaded
    if (this.incidentForm.valid && this.files.length > 0 && this.signature) {
      // Logic to store data in the database (to be implemented)
      console.log('Form submitted', this.incidentForm.value, this.files, this.signature);
      
      // Reset form after submission
      this.incidentForm.reset();
      this.files = [];
      this.signature = null;
      this.errorMessage = ''; // Clear any previous error messages
    } else {
      // Set error message if validation fails
      this.errorMessage = 'Please fill all required fields, upload files, and affix your signature.';
    }
  }
}
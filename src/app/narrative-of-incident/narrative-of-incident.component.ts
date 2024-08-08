import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-narrative-of-incident',
  templateUrl: './narrative-of-incident.component.html',
  styleUrls: ['./narrative-of-incident.component.css']
})
export class NarrativeOfIncidentComponent {
  incidentForm: FormGroup;
  files: File[] = [];
  signature: File | null = null;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.incidentForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      place: ['', Validators.required],
      province: ['', Validators.required],
      narrative: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }

  onSignatureChange(event: any) {
    this.signature = event.target.files[0];
  }

  submitForm() {
    if (this.incidentForm.valid && this.files.length > 0 && this.signature) {
      // Logic to store data in the database
      console.log('Form submitted', this.incidentForm.value, this.files, this.signature);
      // Reset form after submission
      this.incidentForm.reset();
      this.files = [];
      this.signature = null;
    } else {
      this.errorMessage = 'Please fill all required fields and upload files.';
    }
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WitnessService } from '../witness.service'; // Adjusted the path as necessary

@Component({
  selector: 'app-reporting-person',
  templateUrl: './reporting-person.component.html',
  styleUrls: ['./reporting-person.component.css']
})
export class ReportingPersonComponent {
  reportingForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private witnessService: WitnessService) {
    this.reportingForm = this.fb.group({
      familyName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      citizenship: ['', Validators.required],
      status: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      homePhone: [''],
      mobilePhone: [''],
      email: ['', Validators.email],
      currentAddress: ['', Validators.required],
      village: [''],
      barangay: [''],
      townCity: ['', Validators.required],
      province: ['', Validators.required],
      otherAddress: [''],
      workAddress: ['', Validators.required],
      workPhone: [''],
      idCard: [''],
      referencePerson: [''],
      occupation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reportingForm.valid) {
      // Save data to the database using WitnessService
      this.witnessService.submitWitnessData(this.reportingForm.value).subscribe(
        response => {
          console.log('Data saved successfully', response);
          // Navigate to the next form
          this.router.navigate(['/suspect-data']); // Adjust the route as necessary
        },
        error => {
          console.error('Error saving data', error);
          alert('There was an error saving your data. Please try again.');
        }
      );
    } else {
      alert("Please fill out all required fields.");
    }
  }
}
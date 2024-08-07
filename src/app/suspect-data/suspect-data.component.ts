import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSuspectService } from '../data-suspect.service'; // Ensure the path is correct

@Component({
  selector: 'app-suspect-data',
  templateUrl: './suspect-data.component.html',
  styleUrls: ['./suspect-data.component.css']
})
export class SuspectDataComponent {
  // Form data model
  suspectData = {
    familyName: '',
    firstName: '',
    middleName: '',
    citizenship: '',
    status: '',
    gender: '',
    entryDate: '',
    placeOfBirth: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    currentAddress: '',
    village: '',
    barangay: '',
    town: '',
    province: '',
    region: '',
    workDetails: {
      occupation: '',
      workAddress: '',
      workPhone: ''
    },
    description: {
      height: '',
      weight: '',
      eyeColor: '',
      eyeDescription: '',
      hairColor: '',
      hairDescription: ''
    },
    underInfluence: '',
    otherFeatures: '',
    noSuspect: false,
    sameAddress: false
  };

  constructor(private router: Router, private dataSuspectService: DataSuspectService) {}

  // Handle form submission
  onSubmit() {
    if (this.validateForm()) {
      this.dataSuspectService.saveSuspectData(this.suspectData).subscribe(
        (response: any) => {
          console.log('Data saved successfully:', response);
          this.router.navigate(['/victim-data']);
        },
        (error: any) => {
          console.error('Error saving data:', error);
          alert('There was an error saving the data. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Validate form fields
  validateForm() {
    return this.suspectData.familyName && this.suspectData.firstName; // Add more validations as needed
  }

  // Handle checkbox for no suspect
  onNoSuspectChange() {
    // Navigate to the Victim Data form if no suspect is checked
    if (this.suspectData.noSuspect) {
      this.router.navigate(['/victim-data']);
    }
  }

  // Handle checkbox for same address
  onSameAddressChange() {
    if (this.suspectData.sameAddress) {
      // Fill in the address fields with current address
      this.suspectData.village = this.suspectData.currentAddress;
      // Repeat for other address fields as necessary
    }
  }
}
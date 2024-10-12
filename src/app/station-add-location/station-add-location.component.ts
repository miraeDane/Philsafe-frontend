import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { StationAddLocationService, IAccount, IPerson, ILocation } from '../station-add-location.service'; // Import the service
import {StationAddLocationService,ILocation,} from '../station-add-location.service'; // Import the service
import { Router } from '@angular/router'; // Import Router for navigation
import moment from 'moment';
import { resolve } from 'node:path';

@Component({
  selector: 'app-station-add-location',
  templateUrl: './station-add-location.component.html',
  styleUrl: './station-add-location.component.css',
})
export class StationAddLocationComponent implements OnInit {
  registrationForm: FormGroup; // Form group for registration

  // Properties to hold retrieved IDs
  accountID: string | null = null; // To hold account ID
  locationID: string | null = null; // To hold location ID
  personID: string | null = null; // To hold person ID
  isSameAddress: boolean = false; // Flag to check if home and work addresses are the same
  userWorkAddress: any = {}; // Placeholder for user work address data

  constructor(
    private fb: FormBuilder,
    private StationAddLocationService: StationAddLocationService,
    private router: Router
  ) {
    // Initialize the registration form with validation
    this.registrationForm = this.fb.group({
      region: ['', Validators.required], // New field
      province: ['', Validators.required], // New field
      municipality: ['', Validators.required], // New field
      barangay: ['', Validators.required], // New field
      street: ['', Validators.required], // New field
      blockLotUnit: ['', Validators.required], // New field
      zipCode: ['', Validators.required], // New field
    });
  }

  ngOnInit(): void {
    console.log('Create Account Component Initialized'); // Debugging log
  }


  submitLocation(locationData: ILocation) {
    const { zipCode } = locationData;
    return new Promise((resolve, reject) => {
      this.StationAddLocationService.postLocation(
        zipCode,
        locationData
      ).subscribe((data) => {
        console.log(data);
        resolve(data);
      });
    });
  }

  // Method to handle form submission
  async onSubmit() {
    const accountData = this.registrationForm.value; // Get account data from the form

    const homeLocationData: ILocation = {
      zipCode: accountData.zipCode,
      region: accountData.region,
      province: accountData.province,
      municipality: accountData.municipality,
      barangay: accountData.barangay,
      street: accountData.street,
      blockLotUnit: accountData.blockLotUnit,
    };
    // Submit home address
    const homeLocationRequest: any = await this.submitLocation(
      homeLocationData
    );
    this.router.navigate(['/station-register']);
  }
}

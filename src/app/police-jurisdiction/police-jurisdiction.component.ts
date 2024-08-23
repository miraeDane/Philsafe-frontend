import { Component } from '@angular/core';
import { PoliceJurisdictionService } from '../police-jurisdiction.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-police-jurisdiction',
  templateUrl: './police-jurisdiction.component.html',
  styleUrls: ['./police-jurisdiction.component.css']
})
export class PoliceJurisdictionComponent {
  regionOffice: string = '';
  provincialCityDistrict: string = '';
  regionalDirector: string = '';
  station: string = '';
  officerInCharge: string = '';
  locationId: number = 0; // Assuming you have a locationId field
  authToken: string = 'YOUR_ACTUAL_TOKEN'; // Replace with your actual token

  constructor(private dataService: PoliceJurisdictionService) {}

  onSubmit() {
    const formData = {
        regionOffice: this.regionOffice,
        provincialCityDistrict: this.provincialCityDistrict,
        regionalDirector: this.regionalDirector,
        station: this.station,
        officerInCharge: this.officerInCharge,
        locationId: this.locationId // Include locationId in the request
    };

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.authToken}`,
        'Content-Type': 'application/json'
    });

    console.log('Authorization Token:', this.authToken); // Log token for debugging
    console.log('Headers:', headers); // Log headers for debugging
    console.log('Form Data:', formData); // Log form data for debugging

    this.dataService.saveData(formData, { headers }).subscribe(response => {
        console.log('Data saved successfully', response);
    }, error => {
        console.error('Error saving data', error);
        console.error('Error details:', error.error); // Log error details
    });
  }
}
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StationRegistrationService } from '../station-registration.service'; // Import the service

@Component({
  selector: 'app-station-registration',
  templateUrl: './station-registration.component.html',
  styleUrls: ['./station-registration.component.css']
})
export class StationRegistrationComponent {
    isLoading = false; // Loading state
    successMessage: string | null = null; // Success message
    errorMessage: string | null = null; // Error message

    constructor(private registrationService: StationRegistrationService) {} // Inject the service

    onSubmit(form: NgForm) {
        console.log('Form submitted:', form.value); // Debugging line
        if (form.valid) {
            console.log('Form is valid so yeaaah', form) 

            const stationData = form.value; // Use FormData to handle file upload
            // stationData.append('hq', form.value.hq); // Map to Jurisdiction model
            // stationData.append('locationId', form.value.locationId); // Map to Jurisdiction model
            // stationData.append('abbr', form.value.abbr); // Map to Jurisdiction model
            // stationData.append('rank', form.value.rank); // Map to Jurisdiction model
            // stationData.append('officerInChargeId', form.value.officerInChargeId); // Map to Jurisdiction model
            // stationData.append('isApproved', 'false'); // Default value for isApproved

            // const profilePhoto = (form.controls['profilePhoto'].value as FileList)[0];
            // if (profilePhoto) {
            //     stationData.append('profilePhoto', profilePhoto, profilePhoto.name); // Handle file upload
            // }

            this.isLoading = true; // Set loading state
            console.log("Station Data!!!!", stationData)
            this.registrationService.saveStationData(stationData).subscribe(response => {
                this.isLoading = false; // Reset loading state
                this.successMessage = 'Registration successful!'; // Set success message
                console.log('Registration successful:', response);
                // Optionally reset the form or redirect    
            }, error => {
                this.isLoading = false; // Reset loading state
                this.errorMessage = 'Registration failed. Please try again.'; // Set error message
                console.error('Registration failed:', error);
            });
        } else {
            this.errorMessage = 'Please fill in all required fields.'; // Handle invalid form
            console.log('Error Message:', this.errorMessage);
        }
    }
}
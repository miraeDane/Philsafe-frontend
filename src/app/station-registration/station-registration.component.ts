import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Injectable } from '@angular/core'; // Import Injectable

@Injectable({ providedIn: 'root' }) // Add Injectable decorator
export class StationRegistrationService { // Create a service for registration
    constructor(private http: HttpClient) {}

    saveStationData(stationData: FormData) { // Change parameter type to FormData
        return this.http.post('YOUR_API_ENDPOINT', stationData); // Replace with your API endpoint
    }
}

@Component({
  selector: 'app-station-registration',
  templateUrl: './station-registration.component.html',
  styleUrls: ['./station-registration.component.css']
})
export class StationRegistrationComponent {
    constructor(private registrationService: StationRegistrationService) {} // Inject the service

    onSubmit(form: NgForm) {
        if (form.valid) {
            const stationData = new FormData(); // Use FormData to handle file upload
            stationData.append('stationName', form.value.stationName);
            stationData.append('city', form.value.city);
            stationData.append('provincialOffice', form.value.provincialOffice);
            stationData.append('regionalOffice', form.value.regionalOffice);
            stationData.append('regionalDirector', form.value.regionalDirector);
            stationData.append('officerCommander', form.value.officerCommander);
            stationData.append('email', form.value.email);
            stationData.append('officeNumber', form.value.officeNumber);
            stationData.append('password', form.value.password);
            stationData.append('confirmPassword', form.value.confirmPassword);

            const profilePhoto = (form.controls['profilePhoto'].value as FileList)[0];
            if (profilePhoto) {
                stationData.append('profilePhoto', profilePhoto, profilePhoto.name);
            }

            this.registrationService.saveStationData(stationData).subscribe(response => {
                console.log('Registration successful:', response);
                // Handle successful registration (e.g., show a success message)
            }, error => {
                console.error('Registration failed:', error);
                // Handle error (e.g., show an error message)
            });
        }
    }
}
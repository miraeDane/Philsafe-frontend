import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Injectable } from '@angular/core'; // Import Injectable

@Injectable({ providedIn: 'root' }) // Add Injectable decorator
export class StationRegistrationService { // Create a service for registration
    constructor(private http: HttpClient) {}

    saveStationData(stationData: any) {
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
            const stationData = {
                stationName: form.value.stationName,
                city: form.value.city,
                provincialOffice: form.value.provincialOffice,
                regionalOffice: form.value.regionalOffice,
                regionalDirector: form.value.regionalDirector,
                officerCommander: form.value.officerCommander,
                email: form.value.email,
                officeNumber: form.value.officeNumber,
                password: form.value.password,
                confirmPassword: form.value.confirmPassword
            };
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
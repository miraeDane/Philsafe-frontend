import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoliceRegisterService } from '../police-register.service'; // Import the service

@Component({
  selector: 'app-police-register',
  templateUrl: './police-register.component.html',
  styleUrls: ['./police-register.component.css']
})
export class PoliceRegisterComponent {
  constructor(private registerService: PoliceRegisterService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const registrationData = {
        rank: form.value.rank,
        firstName: form.value.firstName,
        middleName: form.value.middleName,
        lastName: form.value.lastName,
        city: form.value.city,
        badgeNumber: form.value.badgeNumber,
        wcpc: form.value.wcpc,
        email: form.value.email,
        investigator: form.value.investigator
      };

      this.registerService.register(registrationData).subscribe(response => {
        console.log('Registration successful:', response);
        // Handle successful registration (e.g., show a success message)
      }, error => {
        console.error('Registration failed:', error);
        // Handle error (e.g., show an error message)
      });
    }
  }
}
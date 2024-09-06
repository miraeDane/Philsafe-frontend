import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoliceRegisterService } from '../police-register.service'; // Import the service
import { Router } from '@angular/router'; // Import Router to navigate after successful registration

@Component({
  selector: 'app-police-register',
  templateUrl: './police-register.component.html',
  styleUrls: ['./police-register.component.css']
})
export class PoliceRegisterComponent {
  constructor(
    private registerService: PoliceRegisterService,
    private router: Router // Inject Router for navigation
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Prepare registration data
      const registrationData = {
        rank: form.value.rank,
        provincialOffice: form.value.provincialOffice,
        firstName: form.value.firstName,
        middleName: form.value.middleName,
        lastName: form.value.lastName,
        regionalOffice: form.value.regionalOffice,
        city: form.value.city,
        badgeNumber: form.value.badgeNumber,
        wcpc: form.value.wcpc,
        email: form.value.email,
        investigator: form.value.investigator,
        password: form.value.password // Ensure password is captured for submission
      };

      // Call the register service to submit the data
      this.registerService.register(registrationData).subscribe(
        response => {
          console.log('Registration successful:', response);
          // Navigate to a success page or dashboard
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Registration failed:', error);
          alert('Registration failed. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Please fill out all fields correctly.');
    }
  }
}

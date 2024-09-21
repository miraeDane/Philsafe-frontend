// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { PoliceRegisterService } from '../police-register.service'; // Import the service
// import { Router } from '@angular/router'; // Import Router to navigate after successful registration
// import { HttpHeaders } from '@angular/common/http'; // Ensure HttpHeaders is imported

// @Component({
//   selector: 'app-police-register',
//   templateUrl: './police-register.component.html',
//   styleUrls: ['./police-register.component.css']
// })
// export class PoliceRegisterComponent {
//   constructor(
//     private registerService: PoliceRegisterService,
//     private router: Router // Inject Router for navigation
//   ) {}

//   onSubmit(form: NgForm) {
//     if (form.valid) {
//       // Prepare registration data
//       const registrationData = {
//         rank: form.value.rank,
//         provincialOffice: form.value.provincialOffice,
//         firstName: form.value.firstName,
//         middleName: form.value.middleName,
//         lastName: form.value.lastName,
//         regionalOffice: form.value.regionalOffice,
//         city: form.value.city,
//         badgeNumber: form.value.badgeNumber,
//         wcpc: form.value.wcpc,
//         email: form.value.email,
//         investigator: form.value.investigator,
//         password: form.value.password // Ensure password is captured for submission
//       };

//       // Log the registration data to ensure all fields are correct
//       console.log('Registration data:', registrationData);

//       // Set headers if needed by the backend
//       const httpOptions = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json'
//         })
//       };

//       // Call the register service to submit the data
//       this.registerService.register(registrationData).subscribe( // Removed httpOptions
//         response => {
//           console.log('Registration successful:', response);
//           // Navigate to a success page or dashboard
//           this.router.navigate(['/dashboard']);
//         },
//         error => {
//           console.error('Registration failed:', error);

//           // Check if it's a bad request (400)
//           if (error.status === 400) {
//             alert('Bad Request: Please check the data being sent. Possible validation errors.');
//           } else {
//             alert('Registration failed. Please try again.');
//           }
//         }
//       );
//     } else {
//       console.error('Form is invalid');
//       alert('Please fill out all fields correctly.');
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { PoliceRegisterService } from '../police-register.service'; // Import the service
// import { Router } from '@angular/router'; // Import Router to navigate after successful registration
// import { HttpHeaders } from '@angular/common/http'; // Ensure HttpHeaders is imported

// @Component({
//   selector: 'app-police-register',
//   templateUrl: './police-register.component.html',
//   styleUrls: ['./police-register.component.css']
// })
// export class PoliceRegisterComponent {
//   constructor(
//     private registerService: PoliceRegisterService,
//     private router: Router // Inject Router for navigation
//   ) {}

//   onSubmit(form: NgForm) {

//     if (form.valid) {

//       // Prepare registration data with all required fields
//       const registrationData = {
//         rank: form.value.rank,
//         provincialOffice: form.value.provincialOffice,
//         firstName: form.value.firstName,
//         middleName: form.value.middleName,
//         lastName: form.value.lastName,
//         regionalOffice: form.value.regionalOffice,
//         city: form.value.city,
//         badgeNumber: form.value.badgeNumber,
//         wcpc: form.value.wcpc, // WCPC field
//         investigator: form.value.investigator // Investigator field
//       };

//       // Log the registration data to ensure all fields are correct
//       console.log('Registration data:', registrationData);

//       // Set headers if needed by the backend
//       const httpOptions = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json'
//         })
//       };

//       // Call the register service to submit the data
//       this.registerService.register(registrationData).subscribe(
//         response => {
//           console.log('Registration successful:', response);
//           // Navigate to a success page or dashboard
//           this.router.navigate(['/dashboard']);
//         },
//         error => {
//           console.error('Registration failed:', error);

//           // Check if it's a bad request (400) and show appropriate message
//           if (error.status === 400 && error.error && error.error.errors) {
//             const errorDetails = error.error.errors; // Extract error details safely
//             const errorMessage = this.getErrorMessage(errorDetails); // Create a custom error message
//             alert(`Bad Request: ${errorMessage}`);
//           } else {
//             alert('Registration failed. Please try again.');
//           }
//         }
//       );
//     } else {
//       console.error('Form is invalid');
//       alert('Please fill out all fields correctly.');
//     }
//   }

//   // Helper method to extract detailed error messages
//   getErrorMessage(errorDetails: any): string {
//     if (!errorDetails) {
//       return 'An unknown error occurred. Please try again later.';
//     }

//     let message = 'Please check the following fields:\n';
//     for (const key in errorDetails) {
//       if (errorDetails.hasOwnProperty(key)) {
//         message += `${key}: ${errorDetails[key].join(', ')}\n`;
//       }
//     }
//     return message;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoliceRegisterService } from '../police-register.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-police-register',
  templateUrl: './police-register.component.html',
  styleUrls: ['./police-register.component.css'],
})
export class PoliceRegisterComponent implements OnInit {
  ranks: any[] = [];
  profilePicture: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(
    private registerService: PoliceRegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchRanks();
  }

  fetchRanks(): void {
    this.registerService.getRanks().subscribe(
      (response: any) => {
        console.log('Raw response:', response);
        if (Array.isArray(response)) {
          this.ranks = response;
          console.log('Fetched ranks:', this.ranks);
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      (error) => {
        console.error('Error fetching ranks:', error);
        alert('Failed to load ranks. Please try again.');
      }
    );
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.profilePicture = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: NgForm) {
    console.log('Registration form:', form);
    if (form.valid) {
      const formData = new FormData();
      
      const registrationData = {
        rank: form.value.rank,
        provincialOffice: form.value.provincialOffice,
        name: form.value.name,
        regionalOffice: form.value.regionalOffice,
        officerCommander: form.value.officerCommander,
        city: form.value.city,
        badgeNumber: form.value.badgeNumber,
        wcpc: form.value.wcpc,
        investigator: form.value.investigator,
        unit: form.value.unit,
        role: form.value.role,
        debutDate: form.value.debutDate,
        datetimeCreated: form.value.datetimeCreated,
        createdBy: form.value.createdBy
      };

      // Append all form fields to FormData
      Object.keys(registrationData).forEach(key => {
        formData.append(key, registrationData[key as keyof typeof registrationData]);
      });

      // Append profile picture if selected
      if (this.profilePicture) {
        formData.append('profilePicture', this.profilePicture, this.profilePicture.name);
      }

      console.log('Registration data being sent:', registrationData);

      if (!registrationData.rank || !registrationData.name) {
        console.error('Missing mandatory fields:', registrationData);
        alert('Please fill out all required fields.');
        return;
      }

      this.registerService.register(formData).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Registration failed:', error);

          if (error.status === 400 && error.error && error.error.errors) {
            const errorDetails = error.error.errors;
            const errorMessage = this.getErrorMessage(errorDetails);
            alert(`Bad Request: ${errorMessage}`);
          } else {
            alert('Registration failed. Please try again.');
          }
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Please fill out all fields correctly.');
    }
  }

  getErrorMessage(errorDetails: any): string {
    if (!errorDetails) {
      return 'An unknown error occurred. Please try again later.';
    }

    let message = 'Please check the following fields:\n';
    for (const key in errorDetails) {
      if (errorDetails.hasOwnProperty(key)) {
        message += `${key}: ${errorDetails[key].join(', ')}\n`;
      }
    }
    return message;
  }
}
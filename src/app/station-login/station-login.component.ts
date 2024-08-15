import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StationLoginService } from '../station-login.service'; // Import the login service

@Component({
  selector: 'app-station-login',
  templateUrl: './station-login.component.html',
  styleUrls: ['./station-login.component.css'] // Corrected styleUrl to styleUrls
})
export class StationLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: StationLoginService // Inject the login service
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required], // Changed username to email
      password: ['', Validators.required]
    });
  }

  // Function to identify sign-in type (if needed)
  identifySignInType(input: string): string {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactNumberRegex = /^(09|\+639|639)\d{9}$/;

    if (emailRegex.test(input)) {
      return 'Email';
    } else if (contactNumberRegex.test(input)) {
      return 'Contact_Number';
    } else {
      return 'Invalid';
    }
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value; // Use email instead of username
      const signInType = this.identifySignInType(email); // Identify sign-in type

      // Call the login service
      this.loginService.login({ email, password }).subscribe(
        response => {
          console.log('Login successful:', response);
          // Handle successful login (e.g., navigate to another page)
          this.router.navigate(['/dashboard']); // Example route
        },
        error => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid email or password'; // Set error message
        }
      );
    }
  }
}
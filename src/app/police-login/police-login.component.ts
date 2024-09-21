import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoliceLoginService } from '../police-login.service';

@Component({
  selector: 'app-police-login',
  templateUrl: './police-login.component.html',
  styleUrls: ['./police-login.component.css']
})
export class PoliceLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  // Admin credentials
  private readonly ADMIN_USERNAME = 'admin';
  private readonly ADMIN_PASSWORD = 'admin';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: PoliceLoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Changed from email to username
      password: ['', Validators.required]
    });
  }

  identifySignInType(input: string): string {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactNumberRegex = /^(09|\+639|639)\d{9}$/;

    if (emailRegex.test(input)) {
      return 'Email';
    } else if (contactNumberRegex.test(input)) {
      return 'Contact_Number';
    } else {
      return 'Username'; // Changed from 'Invalid' to 'Username'
    }
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Check for admin login
      if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
        console.log('Admin login successful');
        this.router.navigate(['/admin-dashboard']); // Navigate to admin dashboard
        return;
      }

      const signInType = this.identifySignInType(username);

      // Regular user login
      this.loginService.login({ username, password, signInType }).subscribe(
        response => {
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login failed:', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
    }
  }
}
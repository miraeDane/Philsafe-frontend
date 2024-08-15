import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-login',
  templateUrl: './police-login.component.html',
  styleUrls: ['./police-login.component.css']
})
export class PoliceLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post('https://your-backend-url.com/api/login', this.loginForm.value)
        .subscribe({
          next: (response: any) => {
            // Handle successful login, e.g., store token and navigate
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            // Handle error
            this.errorMessage = 'Incorrect username or password.';
            this.loginForm.controls['password'].reset();
            this.loginForm.controls['password'].setErrors({ 'incorrect': true });
            this.loginForm.controls['password'].markAsTouched();
          }
        });
    }
  }
}
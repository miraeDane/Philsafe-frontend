import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-victim-register',
  templateUrl: './victim-register.component.html',
  styleUrls: ['./victim-register.component.css']
})
export class VictimRegisterComponent {
  registerForm: FormGroup;
  passwordStrength: string = '';
  passwordValid: boolean = false;
  passwordRequirements: string[] = [];
  progressBarWidth: string = '0%';
  showPassword: boolean = false; 
  showConfirmPassword: boolean = false; 
  passwordMatchMessage: string = ''; // Message for password match

  constructor(private fb: FormBuilder, private http: HttpClient) { // Inject HttpClient
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onPasswordChange() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    this.passwordStrength = this.checkPasswordStrength(password);
    this.passwordValid = this.isPasswordValid(password);
    this.passwordRequirements = this.getPasswordRequirements(password);
    this.progressBarWidth = this.getProgressBarWidth(password);

    // Check if passwords match
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        this.passwordMatchMessage = "Password match!";
      } else {
        this.passwordMatchMessage = "Password doesn't match!";
      }
    } else {
      this.passwordMatchMessage = ''; // Clear message if fields are empty
    }
  }

  checkPasswordStrength(password: string): string {
    if (!password) return '';
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongRegex.test(password)) {
      return 'Very strong password';
    } else if (mediumRegex.test(password)) {
      return 'Medium password';
    } else {
      return 'Weak password';
    }
  }

  isPasswordValid(password: string): boolean {
    return this.checkPasswordStrength(password) === 'Very strong password';
  }

  getPasswordRequirements(password: string): string[] {
    const requirements = [];
    if (!/(?=.*[a-z])/.test(password)) requirements.push('Ensure that password contains both upper and lowercase letters.');
    if (!/(?=.*[A-Z])/.test(password)) requirements.push('Ensure that password contains both upper and lowercase letters.');
    if (!/(?=.*\d)/.test(password)) requirements.push('Include numbers.');
    if (!/(?=.*[@$!%*?&])/.test(password)) requirements.push('Include symbols like @, _, #, *, and/or numbers.');
    return requirements;
  }

  getProgressBarWidth(password: string): string {
    if (!password) return '0%';
    const strength = this.checkPasswordStrength(password);
    if (strength === 'Very strong password') return '100%';
    if (strength === 'Medium password') return '50%';
    return '25%';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    if (this.registerForm.valid && this.passwordValid) {
      console.log('Form Submitted', this.registerForm.value);
      this.storeData(this.registerForm.value); // Call the method to store data
    } else {
      console.log('Form is invalid');
    }
  }

  storeData(formData: any) { // New method to store data
    this.http.post('YOUR_API_ENDPOINT', formData) // Replace with your API endpoint
      .subscribe(response => {
        console.log('Data stored successfully', response);
      }, error => {
        console.error('Error storing data', error);
      });
  }
}
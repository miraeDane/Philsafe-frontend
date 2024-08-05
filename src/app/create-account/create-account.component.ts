import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
    registrationForm: FormGroup;
    passwordStrength: string = '';
    passwordValid: boolean = false;
    passwordRequirements: string[] = [];
    progressBarWidth: string = '0%';
    showPassword: boolean = false; 
    showConfirmPassword: boolean = false; 
    passwordMatchMessage: string = ''; // Message for password match
    selectedPhoto: File | null = null; // Variable to hold the selected photo

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.registrationForm = this.fb.group({
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            certification: [false, Validators.requiredTrue]
        });
    }

    ngOnInit(): void {
        console.log('Create Account Component Initialized'); // Debugging log
    }

    onPhotoSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedPhoto = input.files[0]; // Store the selected file
        }
    }

    onPasswordChange() {
        const password = this.registrationForm.get('password')?.value;
        const confirmPassword = this.registrationForm.get('confirmPassword')?.value;

        this.passwordStrength = this.checkPasswordStrength(password);
        this.passwordValid = this.isPasswordValid(password);
        this.passwordRequirements = this.getPasswordRequirements(password);
        this.progressBarWidth = this.getProgressBarWidth(password);

        // Check if passwords match
        if (password && confirmPassword) {
            this.passwordMatchMessage = password === confirmPassword ? "Password match!" : "Password doesn't match!";
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
        if (this.registrationForm.valid && this.passwordValid) {
            const formData = new FormData();
            formData.append('firstName', this.registrationForm.get('firstName')?.value);
            formData.append('middleName', this.registrationForm.get('middleName')?.value);
            formData.append('lastName', this.registrationForm.get('lastName')?.value);
            formData.append('email', this.registrationForm.get('email')?.value);
            formData.append('password', this.registrationForm.get('password')?.value);
            formData.append('confirmPassword', this.registrationForm.get('confirmPassword')?.value);
            formData.append('certification', this.registrationForm.get('certification')?.value);
            if (this.selectedPhoto) {
                formData.append('photo', this.selectedPhoto); // Append the selected photo
            }

            console.log('Form Submitted', formData);
            this.storeData(formData); // Call the method to store data
        } else {
            console.log('Form is invalid', this.registrationForm.errors); // Log errors for debugging
        }
    }

    storeData(formData: FormData) { // New method to store data
        this.http.post('YOUR_API_ENDPOINT', formData) // Replace with your API endpoint
            .subscribe(response => {
                console.log('Data stored successfully', response);
            }, error => {
                console.error('Error storing data', error);
            });
    }
}
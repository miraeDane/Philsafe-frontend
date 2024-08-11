import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service'; // Import the service
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
    registrationForm: FormGroup; // Form group for registration
    passwordStrength: string = ''; // To hold password strength
    passwordValid: boolean = false; // To check if password is valid
    passwordRequirements: string[] = []; // To hold password requirements
    progressBarWidth: string = '0%'; // To show password strength progress
    showPassword: boolean = false; // To toggle password visibility
    showConfirmPassword: boolean = false; // To toggle confirm password visibility
    passwordMatchMessage: string = ''; // Message for password match
    selectedPhoto: File | null = null; // Variable to hold the selected photo
    profilePic: string | ArrayBuffer | null = ''; // Variable to hold the photo preview
    errorMessage: string = ''; // Variable to hold error messages

    // Properties to hold retrieved IDs
    accountID: string | null = null; // To hold account ID
    locationID: string | null = null; // To hold location ID
    personID: string | null = null; // To hold person ID
    isSameAddress: boolean = false; // Flag to check if home and work addresses are the same
    userWorkAddress: any = {}; // Placeholder for user work address data

    constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {
        // Initialize the registration form with validation
        this.registrationForm = this.fb.group({
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            certification: [false, Validators.requiredTrue],
            dateOfBirth: ['', Validators.required], // New field
            gender: ['', Validators.required], // New field
            civilStatus: ['', Validators.required], // New field
            region: ['', Validators.required], // New field
            province: ['', Validators.required], // New field
            municipality: ['', Validators.required], // New field
            barangay: ['', Validators.required], // New field
            street: ['', Validators.required], // New field
            blockLotUnit: ['', Validators.required], // New field
            zipCode: ['', Validators.required], // New field
            workRegion: ['', Validators.required], // New field
            workProvince: ['', Validators.required], // New field
            workMunicipality: ['', Validators.required], // New field
            workBarangay: ['', Validators.required], // New field
            workStreet: ['', Validators.required], // New field
            workBlockLotUnit: ['', Validators.required], // New field
            workZipCode: ['', Validators.required], // New field
            role: ['', Validators.required], // Role selection
            contactNum: ['', Validators.required] // New field
        });
    }

    ngOnInit(): void {
        console.log('Create Account Component Initialized'); // Debugging log
    }

    // Method to handle photo selection
    onPhotoSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedPhoto = input.files[0]; // Store the selected file
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target) {
                    this.profilePic = e.target.result; // Set the profile picture preview
                }
            };
            reader.readAsDataURL(this.selectedPhoto);
        }
    }

    // Method to handle password changes
    onPasswordChange() {
        const password = this.registrationForm.get('password')?.value;
        const confirmPassword = this.registrationForm.get('confirmPassword')?.value;

        this.passwordStrength = this.checkPasswordStrength(password); // Check password strength
        this.passwordValid = this.isPasswordValid(password); // Validate password
        this.passwordRequirements = this.getPasswordRequirements(password); // Get password requirements
        this.progressBarWidth = this.getProgressBarWidth(password); // Update progress bar width

        // Check if passwords match
        if (password && confirmPassword) {
            this.passwordMatchMessage = password === confirmPassword ? "Password match!" : "Password doesn't match!";
        } else {
            this.passwordMatchMessage = ''; // Clear message if fields are empty
        }
    }

    // Method to handle form submission
    onSubmit() {
        this.errorMessage = ''; // Clear previous error message
        console.log('Form Value:', this.registrationForm.value); // Log form value
        console.log('Form Errors:', this.registrationForm.errors); // Log form errors

        // Log the validity of each form control
        Object.keys(this.registrationForm.controls).forEach(key => {
            const controlErrors = this.registrationForm.get(key)?.errors;
            if (controlErrors != null) {
                console.log('Key control: ' + key + ', errors: ', controlErrors);
            }
        });

        if (this.registrationForm.valid && this.passwordValid) {
            const accountData = this.registrationForm.value; // Get account data from the form

            // Adjust role based on the selected role
            if (accountData.role === 'User') {
                accountData.role = accountData.certification ? 'User (Certified)' : 'User (Uncertified)';
            }

            this.accountService.postAccount(accountData).subscribe(
                (response: any) => {
                    alert('Registration successful'); // Alert on successful registration
                    console.log('Account Data:', accountData); // Log account data
                    this.router.navigate(['/home-page']); // Navigate to home page

                    // Post person and location data
                    const personData = { 
                        firstName: accountData.firstName,
                        middleName: accountData.middleName,
                        lastName: accountData.lastName,
                        gender: accountData.gender,
                        dateOfBirth: accountData.dateOfBirth,
                        civilStatus: accountData.civilStatus, // New field
                        role: accountData.role // Ensure role is included
                    };
                    const personRequest = this.accountService.postPerson(personData);

                    const homeLocationData = {
                        zipCode: accountData.zipCode,
                        region: accountData.region,
                        province: accountData.province,
                        municipality: accountData.municipality,
                        barangay: accountData.barangay,
                        street: accountData.street,
                        blockLotUnit: accountData.blockLotUnit,
                    };
                    const homeLocationRequest = this.accountService.postLocation(accountData.zipCode, homeLocationData);

                    let workLocationRequest;
                    if (!this.isSameAddress) {
                        workLocationRequest = this.accountService.postLocation(this.userWorkAddress.zipCode, {
                            region: this.userWorkAddress.region,
                            province: this.userWorkAddress.province,
                            municipality: this.userWorkAddress.municipality,
                            barangay: this.userWorkAddress.barangay,
                            street: this.userWorkAddress.street,
                            blockLotUnit: this.userWorkAddress.blockLotUnit,
                        });
                    }

                    // Handle multiple requests
                    const requests = [personRequest, homeLocationRequest];
                    if (workLocationRequest) {
                        requests.push(workLocationRequest);
                    }

                    // Execute all requests
                    Promise.all(requests).then(() => {
                        console.log('All requests completed successfully');
                    }).catch((error) => {
                        console.error('Error in one of the requests', error);
                    });
                },
                (error: any) => {
                    console.error('Failed to register account', error); // Log error if registration fails
                    console.log('Account Data:', accountData); // Log account data
                    if (error.error && error.error.errors) {
                        console.log('Validation Errors:', error.error.errors); // Log validation errors
                    }
                }
            );
        } else {
            this.errorMessage = 'Please fill in all required fields correctly.'; // Set error message
            console.log('Form is invalid', this.registrationForm.errors); // Log form errors
        }
    }

    // Method to check password strength
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

    // Method to validate if the password is strong
    isPasswordValid(password: string): boolean {
        return this.checkPasswordStrength(password) === 'Very strong password';
    }

    // Method to get password requirements
    getPasswordRequirements(password: string): string[] {
        const requirements = [];
        if (!/(?=.*[a-z])/.test(password)) requirements.push('Ensure that password contains both upper and lowercase letters.');
        if (!/(?=.*[A-Z])/.test(password)) requirements.push('Ensure that password contains both upper and lowercase letters.');
        if (!/(?=.*\d)/.test(password)) requirements.push('Include numbers.');
        if (!/(?=.*[@$!%*?&])/.test(password)) requirements.push('Include symbols like @, _, #, *, and/or numbers.');
        return requirements;
    }

    // Method to get progress bar width based on password strength
    getProgressBarWidth(password: string): string {
        if (!password) return '0%';
        const strength = this.checkPasswordStrength(password);
        if (strength === 'Very strong password') return '100%';
        if (strength === 'Medium password') return '50%';
        return '25%';
    }

    // Method to toggle password visibility
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    // Method to toggle confirm password visibility
    toggleConfirmPasswordVisibility() {
        this.showConfirmPassword = !this.showConfirmPassword;
    }
}
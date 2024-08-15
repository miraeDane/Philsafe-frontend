import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WitnessService } from '../witness.service'; // Import the service

@Component({
  selector: 'app-witness-register',
  templateUrl: './witness-register.component.html',
  styleUrls: ['./witness-register.component.css']
})
export class WitnessRegisterComponent {
  witnessForm: FormGroup;

  constructor(private fb: FormBuilder, private witnessService: WitnessService) {
    this.witnessForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Example pattern for 10-digit number
      verificationCode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.witnessForm.valid) {
      this.witnessService.submitWitnessData(this.witnessForm.value).subscribe(
        response => {
          console.log('Data submitted successfully', response);
          // Handle success (e.g., show a success message, redirect, etc.)
        },
        error => {
          console.error('Error submitting data', error);
          // Handle error (e.g., show an error message)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
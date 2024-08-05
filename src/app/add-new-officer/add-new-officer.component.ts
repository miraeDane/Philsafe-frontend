import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficerService } from '../officer.service'; // Import the service

@Component({
  selector: 'app-add-new-officer',
  templateUrl: './add-new-officer.component.html',
  styleUrls: ['./add-new-officer.component.css']
})
export class AddNewOfficerComponent {
  officerForm: FormGroup;

  constructor(private fb: FormBuilder, private officerService: OfficerService) {
    this.officerForm = this.fb.group({
      rank: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      civilStatus: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Only numbers allowed
      team: ['', Validators.required],
      policeInCharge: ['', Validators.required]
    });
  }

  saveOfficer() {
    if (this.officerForm.valid) {
      this.officerService.saveOfficer(this.officerForm.value).subscribe(
        response => {
          console.log('Officer saved successfully', response);
          this.officerForm.reset(); // Reset the form after saving
        },
        error => {
          console.error('Error saving officer', error);
        }
      );
    } else {
      // Find the first invalid control
      const firstInvalidControl = Object.keys(this.officerForm.controls).find(control => {
        return this.officerForm.controls[control].invalid;
      });

      // Focus on the first invalid control
      if (firstInvalidControl) {
        const controlElement = document.getElementsByName(firstInvalidControl)[0] as HTMLElement;
        if (controlElement) {
          controlElement.focus();
        }
      }

      // Show alert for the first empty field
      alert(`Please fill out the field: ${firstInvalidControl}`);
    }
  }
}
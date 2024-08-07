import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-victim-data',
  templateUrl: './victim-data.component.html',
  styleUrls: ['./victim-data.component.css']
})
export class VictimDataComponent {
  formData = {
    familyName: '',
    firstName: '',
    middleName: '',
    citizenship: '',
    status: '',
    gender: '',
    dob: '',
    placeOfBirth: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    currentAddress: '',
    village: '',
    barangay: '',
    town: '',
    province: '',
    otherAddress: '',
    workOccupation: '',
    workAddress: '',
    workPhone: '',
    isReporterVictim: false,
    isSameAddress: false,
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      // this.yourService.storeData(this.formData);
      this.router.navigate(['/narrative-of-incident']);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  isFormValid() {
    return this.formData.familyName && this.formData.firstName && this.formData.dob;
  }

  onReporterVictimChange() {
    this.router.navigate(['/narrative-of-incident']);
  }

  onSameAddressChange() {
    if (this.formData.isSameAddress) {
      this.formData.otherAddress = this.formData.currentAddress;
    }
  }
}
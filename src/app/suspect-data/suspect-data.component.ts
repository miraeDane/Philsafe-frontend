import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspect-data',
  templateUrl: './suspect-data.component.html',
  styleUrls: ['./suspect-data.component.css']
})
export class SuspectDataComponent {
  suspectData = {
    familyName: '',
    firstName: '',
    middleName: '',
    citizenship: '',
    status: '',
    gender: '',
    entryDate: '',
    placeOfBirth: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    sameAddress: false,
    currentAddress: '',
    village: '',
    barangay: '',
    town: '',
    province: '',
    region: '',
    workDetails: {
      occupation: '',
      workAddress: '',
      workPhone: ''
    },
    description: {
      height: '',
      weight: '',
      eyeColor: '',
      eyeDescription: '',
      hairColor: '',
      hairDescription: ''
    },
    underInfluence: '',
    otherFeatures: '',
    noSuspect: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.suspectData);
    this.router.navigate(['/victim-data']);
  }

  onSameAddressChange() {
    if (this.suspectData.sameAddress) {
      this.suspectData.village = this.suspectData.currentAddress;
      this.suspectData.barangay = this.suspectData.currentAddress;
      this.suspectData.town = this.suspectData.currentAddress;
      this.suspectData.province = this.suspectData.currentAddress;
      this.suspectData.region = this.suspectData.currentAddress;
    } else {
      this.suspectData.village = '';
      this.suspectData.barangay = '';
      this.suspectData.town = '';
      this.suspectData.province = '';
      this.suspectData.region = '';
    }
  }

  onNoSuspectChange() {
    if (this.suspectData.noSuspect) {
      this.router.navigate(['/victim-data']);
    }
  }
}
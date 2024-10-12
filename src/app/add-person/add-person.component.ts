import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { AddPersonService, IAccount, IPerson, IPolice } from '../add-person.service';
import moment from 'moment';
import { resolve } from 'node:path';
import { PersonService } from '../person.service';
@Component({
    selector: 'app-add-person',
    templateUrl: './add-person.component.html',
    styleUrl: './add-person.component.css'
})

export class AddPersonComponent implements OnInit {
    registrationForm: FormGroup; // Form group for registration 

    accountID: string | null = null; // To hold account ID
    personID: string | null = null; // To hold person ID
    policeID: string | null = null;

    constructor(
        private fb: FormBuilder,
        private AddPersonService: AddPersonService,
        private PersonService: PersonService,
        private router: Router) {
        // Initialize the registration form with validation
        this.registrationForm = this.fb.group({

            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            certification: [false, Validators.requiredTrue],
            dateOfBirth: ['', Validators.required], // New field
            sex: ['', Validators.required], // New field
            civilStatus: ['', Validators.required], // New field
        });
    }

    ngOnInit(): void {
        console.log('Create Account Component Initialized'); // Debugging log
    }

    submitPerson(personData: IPerson) {
        return new Promise((resolve, reject) => {
            this.AddPersonService.postPerson(personData).subscribe(data => {
                console.log(data)
                resolve(data)
            });
        })
    }

    submitPolice(policeData: IPolice) {
        return new Promise((resolve, reject) => {
            this.AddPersonService.postPolice(policeData).subscribe(data => {
                console.log(data)
                resolve(data)
            });
        })
    }

    submitAccount(accountData: IAccount) {
        return new Promise((resolve, reject) => {
            this.AddPersonService.postAccount(accountData).subscribe(data => {
                console.log(data)
                resolve(data)
            });
        })
    }
    // Method to handle form submission
    async onSubmit() {
        const accountData = this.registrationForm.value;

        //   submit person data request
        // const personRequest: any = await this.submitPerson(personData);
        // ids.personId = personRequest.id

        // const accountReqData: IAccount = {
        //   ...personData,
        //   email: accountData.email,
        //   password: accountData.password,
        //   contactNum: accountData.contactNum,
        //   ...ids,
        //   role: 'police',
        // }

        const AccountData: IPerson = {
            person_id: accountData.person_Id,
            firstname: accountData.firstName,
            middlename: accountData.middleName,
            lastname: accountData.lastName,
            sex: accountData.sex,
            birthdate: accountData.birthdate,
            civilStatus: accountData.civilStatus,
            bioStatus: accountData.bioStatus,
            // person_Id:accountData.person_id,
            // role: accountData.role,
            // profilePic?: accountData.profilePic,
        };

        const policeData = this.registrationForm.value;
        
        const PoliceData: IPolice = {
            person_id: policeData.person_Id,
            firstname: policeData.firstName,
            middlename: policeData.middleName,
            lastname: policeData.lastName,
            sex: policeData.sex,
            birthdate: policeData.birthdate,
            civilStatus: policeData.civilStatus,
            bioStatus: policeData.bioStatus,
            unit: policeData.unit,
            role: policeData.role,
            badgeNumber: policeData.badgeNumber,
            debutDate: policeData.debutDate,
            stationId: policeData.station_Id,
            personId: policeData.person_Id,
            pfpId: policeData.pfp_Id,
            rankId: policeData.rank_Id,
            createdBy: policeData.createdBy,
            datetimeCreated: policeData.datetimeCreated
        };



        // submit to account
        const homeLocationRequest: any = await this.submitPerson(
            AccountData
        );
        this.router.navigate(['/police-register']);
    }

    //   // submit to account
    //   const policeRequest: any = await this.submitPolice(
    //    PoliceData
    //    );
    //    this.router.navigate(['/police-register']);
}



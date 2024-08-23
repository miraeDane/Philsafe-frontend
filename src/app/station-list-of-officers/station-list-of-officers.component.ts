import { Component } from '@angular/core';

@Component({
  selector: 'app-station-list-of-officers',
  templateUrl: './station-list-of-officers.component.html',
  styleUrl: './station-list-of-officers.component.css'
})
export class StationListOfOfficersComponent {

}

// import { Component, OnInit } from '@angular/core';
// import { StationListOfOfficersService } from './station-list-of-officers.service'; // Import the service
// import { Officer } from './officer.model'; // Import the Officer model

// @Component({
//   selector: 'app-station-list-of-officers',
//   templateUrl: './station-list-of-officers.component.html',
//   styleUrls: ['./station-list-of-officers.component.css']
// })
// export class StationListOfOfficersComponent implements OnInit {
//   officers: Officer[] = [];

//   constructor(private officerService: StationListOfOfficersService) {} // Inject the service

//   ngOnInit(): void {
//     this.loadOfficers();
//   }

//   loadOfficers(): void {
//     this.officerService.getOfficers().subscribe(officers => {
//       this.officers = officers;
//     });
//   }

//   deleteOfficer(officerId: number): void {
//     this.officerService.deleteOfficer(officerId).subscribe(response => {
//       console.log('Officer deleted:', response);
//       this.loadOfficers(); // Refresh the list
//     });
//   }

//   archiveOfficer(officerId: number): void {
//     this.officerService.archiveOfficer(officerId).subscribe(response => {
//       console.log('Officer archived:', response);
//       this.loadOfficers(); // Refresh the list
//     });
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { MapboxService } from '../mapbox.service';
// import * as mapboxgl from 'mapbox-gl';
// import { HttpClient } from '@angular/common/http';
// import { MAPBOX_ACCESS_TOKEN, setAccessToken } from '../mapbox-config';

// @Component({
//   selector: 'app-station-crime-map',
//   templateUrl: './station-crime-map.component.html',
//   styleUrls: ['./station-crime-map.component.css'],
// })
// export class StationCrimeMapComponent implements OnInit {
//   map!: mapboxgl.Map;
//   isDropdownOpen = false; // Track dropdown state
//   selectedCrimes: string[] = []; // Track selected crimes
//   crimes = [
//     { name: 'ROBBERY', icon: 'assets/robbery.png' },
//     { name: 'RAPE', icon: 'assets/rape.png' },
//     { name: 'TRAFFIC INCIDENT', icon: 'assets/traffic incident.png' },
//     { name: 'CAR MOTOR NAPPING', icon: 'assets/car motor napping.png' },
//     { name: 'DRUGS', icon: 'assets/img/DRUGS.png' },
//     { name: 'HACKING', icon: 'assets/img/hacking.png' },
//     { name: 'HOMICIDE', icon: 'assets/img/homicide.png' },
//     { name: 'LASCIVIOUSNESS', icon: 'assets/lasciviousness.png' },
//     { name: 'MURDER', icon: 'assets/murder.png' },
//     { name: 'OPERATION FOR ILLEGALS', icon: 'assets/operation for illegals.png' },
//     { name: 'PHYSICAL INJURY', icon: 'assets/physical injury.png' },
//     { name: 'SHOOTING', icon: 'assets/shooting.png' },
//     { name: 'STABBING', icon: 'assets/stabbing.png' },
//   ];

//   constructor(private http: HttpClient, private mapboxService: MapboxService) {}

//   ngOnInit(): void {
//     setAccessToken(MAPBOX_ACCESS_TOKEN); // Use the setter function
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://api.mapbox.com/styles/v1/mimsh23/clzwybab9003201ps4y8ufain/wmts?access_token=pk.eyJ1IjoibWltc2gyMyIsImEiOiJjbHltZ2F3MTIxbWY2Mmtvc2YyZXd0ZWF1In0.YP4QQgS9F_Mqj3m7cB8gLw';
//     document.head.appendChild(link);

//     this.map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mimsh23/clzwybab9003201ps4y8ufain',
//       center: [123.880283, 10.324278],
//       zoom: 10,
//     });
//   }

//   toggleDropdown() {
//     // Method to toggle dropdown visibility
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   toggleCrimeSelection(crime: { name: string; icon: string }) {
//     // Method to toggle crime selection
//     const index = this.selectedCrimes.indexOf(crime.name);
//     if (index > -1) {
//       // If crime is already selected, remove it
//       this.selectedCrimes.splice(index, 1);
//     } else {
//       // If crime is not selected, add it
//       this.selectedCrimes.push(crime.name);
//     }
//     this.filterMarkers(); // Call to filter markers based on selected crimes
//   }

//   isCrimeSelected(crime: { name: string; icon: string }): boolean {
//     // Check if crime is selected
//     return this.selectedCrimes.includes(crime.name);
//   }

//   filterMarkers() {
//     console.log('Filtering markers for:', this.selectedCrimes);
//     // Logic to filter markers on the map based on selected crimes
//     const layers = this.map.getStyle()?.layers; // Use optional chaining to handle null or undefined
//     layers?.forEach((layer: mapboxgl.Layer) => { // Safely iterate if layers is not null
//       if (layer.id.startsWith('crime-')) {
//         this.map.removeLayer(layer.id);
//       }
//     });

//     // Load markers for the selected crimes
//     this.selectedCrimes.forEach((crimeName) => {
//       this.mapboxService.getMarkersByCrime(crimeName).subscribe((markers) => {
//         markers.forEach((marker) => {
//           new mapboxgl.Marker()
//             .setLngLat([marker.longitude, marker.latitude])
//             .addTo(this.map);
//         });
//       });
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { MapboxService } from '../mapbox.service';
// import * as mapboxgl from 'mapbox-gl';
// import { MAPBOX_ACCESS_TOKEN, setAccessToken } from '../mapbox-config';

// @Component({
//   selector: 'app-station-crime-map',
//   templateUrl: './station-crime-map.component.html',
//   styleUrls: ['./station-crime-map.component.css'],
// })
// export class StationCrimeMapComponent implements OnInit {
//   map!: mapboxgl.Map;
//   isDropdownOpen = false; // Track dropdown state
//   selectedCrimes: string[] = []; // Track selected crimes
//   crimes = [
//     { name: 'ROBBERY', icon: 'assets/robbery.png' },
//     { name: 'RAPE', icon: 'assets/rape.png' },
//     { name: 'TRAFFIC INCIDENT', icon: 'assets/traffic incident.png' },
//     { name: 'CAR MOTOR NAPPING', icon: 'assets/car motor napping.png' },
//     { name: 'DRUGS', icon: 'assets/img/DRUGS.png' },
//     { name: 'HACKING', icon: 'assets/img/hacking.png' },
//     { name: 'HOMICIDE', icon: 'assets/img/homicide.png' },
//     { name: 'LASCIVIOUSNESS', icon: 'assets/lasciviousness.png' },
//     { name: 'MURDER', icon: 'assets/murder.png' },
//     { name: 'OPERATION FOR ILLEGALS', icon: 'assets/operation for illegals.png' },
//     { name: 'PHYSICAL INJURY', icon: 'assets/physical injury.png' },
//     { name: 'SHOOTING', icon: 'assets/shooting.png' },
//     { name: 'STABBING', icon: 'assets/stabbing.png' },
//   ];

//   constructor(private mapboxService: MapboxService) {}

//   ngOnInit(): void {
//     setAccessToken(MAPBOX_ACCESS_TOKEN); // Use the setter function
//     this.map = this.mapboxService.initializeMap('map', [123.880283, 10.324278], 10);
//   }

//   toggleDropdown() {
//     // Method to toggle dropdown visibility
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   toggleCrimeSelection(crime: { name: string; icon: string }) {
//     // Method to toggle crime selection
//     const index = this.selectedCrimes.indexOf(crime.name);
//     if (index > -1) {
//       // If crime is already selected, remove it
//       this.selectedCrimes.splice(index, 1);
//     } else {
//       // If crime is not selected, add it
//       this.selectedCrimes.push(crime.name);
//     }
//     this.filterMarkers(); // Call to filter markers based on selected crimes
//   }

//   isCrimeSelected(crime: { name: string; icon: string }): boolean {
//     // Check if crime is selected
//     return this.selectedCrimes.includes(crime.name);
//   }

//   filterMarkers() {
//     console.log('Filtering markers for:', this.selectedCrimes);
//     if (!this.map) {
//       console.error('Map is not initialized.');
//       return; // Exit if the map is not initialized
//     }

//     // Logic to filter markers on the map based on selected crimes
//     const layers = this.map.getStyle()?.layers; // Use optional chaining to handle null or undefined
//     layers?.forEach((layer: mapboxgl.Layer) => { // Safely iterate if layers is not null
//       if (layer.id.startsWith('crime-')) {
//         this.map.removeLayer(layer.id);
//       }
//     });

//     // Load markers for the selected crimes
//     this.selectedCrimes.forEach((crimeName) => {
//       this.mapboxService.getMarkersByCrime(crimeName).subscribe((markers) => {
//         markers.forEach((marker) => {
//           new mapboxgl.Marker()
//             .setLngLat([marker.longitude, marker.latitude])
//             .addTo(this.map);
//         });
//       });
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-station-crime-map',
  templateUrl: './station-crime-map.component.html',
  styleUrls: ['./station-crime-map.component.css'],
})
export class StationCrimeMapComponent implements OnInit {
  isDropdownOpen = false; // Track dropdown state
  selectedCrimes: string[] = []; // Track selected crimes
  crimeDetails: any = {}; // Object to hold crime details
  crimes = [
    { name: 'ROBBERY', icon: 'assets/robbery.png' },
    { name: 'RAPE', icon: 'assets/rape.png' },
    { name: 'TRAFFIC INCIDENT', icon: 'assets/traffic incident.png' },
    { name: 'CAR MOTOR NAPPING', icon: 'assets/car motor napping.png' },
    { name: 'DRUGS', icon: 'assets/img/DRUGS.png' },
    { name: 'HACKING', icon: 'assets/img/hacking.png' },
    { name: 'HOMICIDE', icon: 'assets/img/homicide.png' },
    { name: 'LASCIVIOUSNESS', icon: 'assets/lasciviousness.png' },
    { name: 'MURDER', icon: 'assets/murder.png' },
    { name: 'OPERATION FOR ILLEGALS', icon: 'assets/operation for illegals.png' },
    { name: 'PHYSICAL INJURY', icon: 'assets/physical injury.png' },
    { name: 'SHOOTING', icon: 'assets/shooting.png' },
    { name: 'STABBING', icon: 'assets/stabbing.png' },
  ];

  // Base URL for the Mapbox iframe
  baseMapUrl = "https://api.mapbox.com/styles/v1/mimsh23/clzxya994004p01rbbsifgctv.html?title=false&access_token=YOUR_ACCESS_TOKEN&zoomwheel=false";
  iframeUrl: string = this.baseMapUrl; // Initialize iframe URL

  constructor(private mapboxService: MapboxService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMapCoordinates();
  }

  toggleDropdown() {
    // Method to toggle dropdown visibility
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCrimeSelection(crime: { name: string; icon: string }) {
    // Method to toggle crime selection
    console.log("time here")
    const index = this.selectedCrimes.indexOf(crime.name);
    if (index > -1) {
      // If crime is already selected, remove it
      this.selectedCrimes.splice(index, 1);
    } else {
      // If crime is not selected, add it
      this.selectedCrimes.push(crime.name);
    }
    this.updateIframeUrl(); // Update iframe URL based on selected crimes
    this.fetchCrimeDetails(); // Fetch crime details based on selected crimes
  }

  isCrimeSelected(crime: { name: string; icon: string }): boolean {
    // Check if crime is selected
    return this.selectedCrimes.includes(crime.name);
  }

  fetchMapCoordinates() {
    this.http.get<any[]>('http://localhost:5100/api/location/retrieve/mapcoordinates').subscribe((data) => {
      const coordinates = this.extractCoordinates(data);
      this.updateIframeUrl(coordinates);
    });
  }

  extractCoordinates(data: any[]): { lat: number, lng: number }[] {
    const coordinates: { lat: number, lng: number }[] = [];
    data.forEach(station => {
      if (station.latitude && station.longitude) {
        coordinates.push({ lat: station.latitude, lng: station.longitude });
      }
    });
    return coordinates;
  }

  updateIframeUrl(coordinates?: { lat: number, lng: number }[]) {
    // Construct the new URL based on selected crimes and coordinates
    const crimeFilter = this.selectedCrimes.length > 0 ? `&crimes=${this.selectedCrimes.join(',')}` : '';
    const coordinatesFilter = coordinates ? `&coordinates=${coordinates.map(coord => `${coord.lat},${coord.lng}`).join('|')}` : '';
    this.iframeUrl = `${this.baseMapUrl}${crimeFilter}${coordinatesFilter}`;
  }

  fetchCrimeDetails() {
    // Fetch crime details based on selected crimes from a JSON file
    const crimeTypes = this.selectedCrimes; // Use selected crimes directly
    this.http.get<any[]>('assets/styles.json').subscribe((data) => {
        console.log(data)
      // Filter the data based on selected crime types
        this.crimeDetails = data.filter(crime => crimeTypes.includes(crime.type)); // Assuming 'type' is the key in your JSON
    }, error => {
        console.error('Error fetching crime details:', error);
    });
}
}
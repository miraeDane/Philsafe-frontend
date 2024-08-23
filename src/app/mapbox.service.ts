// import { Injectable } from '@angular/core';
// import * as mapboxgl from 'mapbox-gl';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { MAPBOX_ACCESS_TOKEN } from './mapbox-config';

// @Injectable({
//   providedIn: 'root'
// })
// export class MapboxService {
//   private map!: mapboxgl.Map;
//   private markersUrl = 'assets/style.json'; // Path to your JSON file

//   constructor(private http: HttpClient) {}

//   initializeMap(container: string, center: [number, number], zoom: number): mapboxgl.Map {
//     this.map = new mapboxgl.Map({
//       container: container,
//       style: 'mapbox://styles/yeezzyy27/clzxx2om1004c01pnchyqdp3d',
//       center: center,
//       zoom: zoom,
//       accessToken: MAPBOX_ACCESS_TOKEN
//     });
//     return this.map;
//   }

//   getMarkers(): Observable<any[]> {
//     // Fetch all markers from the JSON file
//     return this.http.get<any[]>(this.markersUrl);
//   }

//   getMarkersByCrime(crime: string): Observable<any[]> {
//     // Fetch markers filtered by crime from the JSON file
//     return this.http.get<any[]>(this.markersUrl).pipe(
//       map(markers => markers.filter(marker => marker.name === crime))
//     );
//   }
// }

import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MAPBOX_ACCESS_TOKEN } from './mapbox-config';

interface Coordinate {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  private map!: mapboxgl.Map;
  private markersUrl = 'assets/style.json'; // Path to your markers JSON file
  private coordinatesUrl = 'http://localhost:5100/api/location/retrieve/mapcoordinates'; // URL to fetch coordinates from backend

  constructor(private http: HttpClient) {}

  initializeMap(container: string, center: [number, number], zoom: number): mapboxgl.Map {
    this.map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/yeezzyy27/clzxx2om1004c01pnchyqdp3d', // Use your Mapbox style URL
      center: center,
      zoom: zoom,
      accessToken: MAPBOX_ACCESS_TOKEN
    });
    return this.map;
  }

  getMarkers(): Observable<any[]> {
    // Fetch all markers from the JSON file
    return this.http.get<any[]>(this.markersUrl).pipe(
      catchError(error => {
        console.error('Error fetching markers:', error);
        return of([]); // Return an empty array using 'of' from RxJS
      })
    );
  }

  getMarkersByCrime(crime: string): Observable<any[]> {
    // Fetch markers filtered by crime from the JSON file
    return this.http.get<any[]>(this.markersUrl).pipe(
      map(markers => markers.filter(marker => marker.name === crime)),
      catchError(error => {
        console.error('Error fetching markers by crime:', error);
        return of([]); // Return an empty array using 'of' from RxJS
      })
    );
  }

  getMapCoordinates(): Observable<{ lat: number, lng: number }[]> {
    // Fetch map coordinates from the backend
    return this.http.get<any[]>(this.coordinatesUrl).pipe(
      map(data => {
        const coordinates: { lat: number, lng: number }[] = [];
        data.forEach(cluster => {
          cluster.coordinates.forEach((coord: Coordinate) => { // Explicitly type 'coord'
            if (coord.latitude && coord.longitude) {
              coordinates.push({ lat: coord.latitude, lng: coord.longitude });
            }
          });
        });
        return coordinates;
      }),
      catchError(error => {
        console.error('Error fetching map coordinates:', error);
        return of([]); // Return an empty array using 'of' from RxJS
      })
    );
  }
}
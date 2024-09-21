// import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class StationRegistrationService {
//   private apiUrl = 'https://localhost:7108/api/jurisdiction'; // Replace with your actual API endpoint
  

//   constructor(private http: HttpClient) {}


//   saveStationData(stationData: any): Observable<any> {
//     return this.http.post(this.apiUrl, stationData); // Send POST request to save data
    
//   }


//   // New method to fetch all station data
//   getAllStations(): Observable<any[]> {

//     return this.http.get<any[]>(this.apiUrl); // Send GET request to fetch all stations

//   }


//   // New method to fetch a single station by ID
//   getStationById(id: number): Observable<any> {

//     return this.http.get<any>(`${this.apiUrl}/${id}`); // Send GET request to fetch station by ID

//   }


//   // New method to update station data
//   updateStationData(id: number, stationData: any): Observable<any> {

//     return this.http.put(`${this.apiUrl}/${id}`, stationData); // Send PUT request to update station data
//   }


//   // New method to delete a station by ID

//   deleteStation(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`); // Send DELETE request to remove a station
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationRegistrationService {
  private apiUrl = 'https://localhost:7108/api/jurisdiction'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  saveStationData(stationData: any): Observable<any> {
    return this.http.post(this.apiUrl, stationData).pipe(
      tap(response => console.log('Save station response:', response))
    );
  }

  getAllStations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(response => console.log('Get all stations response:', response))
    );
  }

  getStationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(response => console.log(`Get station ${id} response:`, response))
    );
  }

  updateStationData(id: number, stationData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, stationData).pipe(
      tap(response => console.log(`Update station ${id} response:`, response))
    );
  }

  deleteStation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(response => console.log(`Delete station ${id} response:`, response))
    );
  }
}
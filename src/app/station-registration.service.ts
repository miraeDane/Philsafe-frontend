import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationRegistrationService {
  private apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  saveStationData(stationData: any): Observable<any> {
    return this.http.post(this.apiUrl, stationData); // Send POST request to save data
  }

  // You can add more methods for other API calls as needed
}
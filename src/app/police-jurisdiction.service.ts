import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliceJurisdictionService {
  private apiUrl = 'https://localhost:7108/api/jurisdiction'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  saveData(data: any, options?: { headers?: HttpHeaders }): Observable<any> {
    return this.http.post(this.apiUrl, data, options); // Pass options to the post request
  }
}
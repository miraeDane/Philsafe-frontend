import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationReportsService {

  private apiUrl = 'https://localhost:7108/api/report/retrieve/local';  // Backend API endpoint

  constructor(private http: HttpClient) { }

  // Fetch all nationwide reports
  getNationwideReports(): Observable<any> {
    return this.http.get(`${this.apiUrl}/retrieve/nationwide`);
  }

  // Fetch local station reports (specific to logged-in station)
  getLocalReports(): Observable<any> {
    return this.http.get(`${this.apiUrl}/retrieve/local`);
  }

  // Fetch reports specific to a citizen
  getCitizenReports(): Observable<any> {
    return this.http.get(`${this.apiUrl}/retrieve/citizen`);
  }

  // Fetch categorized reports
  getCategorizedReports(subcategoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/retrieve/category/${subcategoryId}`);
  }

  // Fetch reports by specific crime ID
  getCrimeReports(crimeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/retrieve/case/${crimeId}`);
  }
}

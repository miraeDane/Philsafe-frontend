import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  private apiUrl = 'http://your-api-url.com/officers'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  saveOfficer(officerData: any): Observable<any> {
    return this.http.post(this.apiUrl, officerData);
  }
}
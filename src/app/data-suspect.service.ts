import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSuspectService {
  private apiUrl = 'https://your-api-url.com/suspects'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to save suspect data
  saveSuspectData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
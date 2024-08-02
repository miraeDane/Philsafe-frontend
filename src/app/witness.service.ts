import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WitnessService {
  private apiUrl = 'https://your-api-url.com/witness'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  submitWitnessData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
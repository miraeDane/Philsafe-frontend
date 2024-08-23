import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliceRegisterService {
  private apiUrl = 'http://localhost:5100/api/police'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
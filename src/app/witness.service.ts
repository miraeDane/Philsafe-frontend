import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalServer } from '../server';

@Injectable({
  providedIn: 'root'
})
export class WitnessService {
  private apiUrl = 'https://your-api-url.com/witness'; // Replace with your actual API URL

   //newly initialized constant server link
   private ipUrl = `${LocalServer.ipAddUrl}/api/account/signup`
   private localUrl = `${LocalServer.localUrl}/api/account/signup`

  constructor(private http: HttpClient) {}

  submitWitnessData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
} 
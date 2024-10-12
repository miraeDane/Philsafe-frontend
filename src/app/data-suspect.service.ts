import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalServer } from '../server';

@Injectable({
  providedIn: 'root'
})
export class DataSuspectService {
  private apiUrl = 'https://your-api-url.com/suspects'; // Replace with your actual API URL
  
   //newly initialized constant server link
   private ipUrl = `${LocalServer.ipAddUrl}/api/account/signup`
   private localUrl = `${LocalServer.localUrl}/api/account/signup`

  constructor(private http: HttpClient) {}

  // Method to save suspect data
  saveSuspectData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
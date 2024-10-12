import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalServer } from '../server';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
  private apiUrl = 'http://your-api-url.com/officers'; // Replace with your API URL

   //newly initialized constant server link
   private ipUrl = `${LocalServer.ipAddUrl}/api/account/signup`
   private localUrl = `${LocalServer.localUrl}/api/account/signup`

  constructor(private http: HttpClient) {}

  saveOfficer(officerData: any): Observable<any> {
    return this.http.post(this.apiUrl, officerData);
  }
}
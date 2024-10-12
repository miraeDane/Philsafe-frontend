// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';

// export interface IReport {
//   reportBody: string;
//   citizenId: number,
//   reportSubCategoryId: number,
//   locationId?: number,
//   stationId: number,
//   crimeId?: number,
//   repotedDate: string,
//   incidentDate?: string,
//   blotterNum: string,
//   hasAccount: boolean,
//   eSigniture: number[] | Uint8Array | Blob,

//   report_id: number;
//   type: string;
//   complaint: string;
//   datteReceived: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CaseService {
//   getReports() {
//     throw new Error('Method not implemented.');
//   }
//   private base = 'https://localhost';

//   constructor(private http: HttpClient) { }

//   getAll(): Observable<any> {
//     const url = `${this.base}/api/report/retrieve/citizen`;
//     return this.http.get(url).pipe(
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     return throwError(errorMessage);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';

// export interface IReport {
//   reportBody: string;
//   citizenId: number;
//   reportSubCategoryId: number;
//   locationId?: number;
//   stationId: number;
//   crimeId?: number;
//   reportedDate: string;  // Fixed typo 'repotedDate' -> 'reportedDate'
//   incidentDate?: string;
//   blotterNum: string;
//   hasAccount: boolean;
//   eSignature: number[] | Uint8Array | Blob;  // Renamed 'eSigniture' -> 'eSignature'
  
//   report_id: number;
//   type: string;
//   complainant: string;  // Changed from 'complaint' to 'complainant'
//   dateReceived: string;  // Fixed typo 'datteReceived' -> 'dateReceived'
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CaseService {
//   private base = 'https://localhost';

//   constructor(private http: HttpClient) {}

//   getAll(): Observable<IReport[]> {  // Strongly typed response
//     const url = `${this.base}/api/report/retrieve/citizen`;
//     return this.http.get<IReport[]>(url).pipe(
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       // Server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }

//     // Log full error for debugging
//     console.error('Full error:', error);

//     return throwError(errorMessage);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface IReport {
  reportBody: string;
  citizenID: number;
  reportSubCategoryID: number;
  locationID?: number;
  stationID: number;
  crimeID?: number;
  reportedDate: string;  // Fixed typo 'repotedDate' -> 'reportedDate'
  incidentDate?: string;
  blotterNum: string;
  hasAccount: boolean;
  eSignature: number[] | Uint8Array | Blob;  // Fixed typo 'eSigniture' -> 'eSignature'
  
  report_id: number;
  type: string;
  complainant: string;
  dateReceived: string;  // Fixed typo 'datteReceived' -> 'dateReceived'
}

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private base = 'https://localhost:7108';  // Updated to match the previous service's base URL

  constructor(private http: HttpClient) {}

  // Helper function to get the session token (from localStorage or cookies)
  private getSessionToken(): string | null {
    return localStorage.getItem('session_token');  // Replace 'session_token' with your token key
  }

  // Helper function to get the headers with session token
  private getHeaders(): HttpHeaders {
    const sessionToken = this.getSessionToken();
    return new HttpHeaders({
      'Authorization': sessionToken ? `Bearer ${sessionToken}` : ''
    });
  }

  // Fetch all citizen reports
  getAll(): Observable<IReport[]> {  // Strongly typed response
    const url = `${this.base}/api/report/retrieve/citizen`;
    const headers = this.getHeaders();  // Add headers with session token
    
    return this.http.get<IReport[]>(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling function
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      
      if (error.error && typeof error.error === 'object') {
        // Log full error details including server response
        console.error('Server-side error details:', error.error);
      }
    }

    // Log full error for debugging
    console.error('Full error details:', error);

    return throwError(errorMessage);
  }
}

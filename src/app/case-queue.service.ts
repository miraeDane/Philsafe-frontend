// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// export interface reports {
//  report_id: number;
//  type: string;
//  complaint: string;
//  datteReceived: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CaseQueueService {
//   private apiUrl = 'https://localhost:7108';  // Backend API endpoint
//   private reportsApiUrl = 'https://localhost:7108/api/report/retrieve/citizen';  // Backend API endpoint
//   private retrieveLocalApiUrl = 'https://localhost:7108/api/report/retrieve/local';
//   constructor(private http: HttpClient) { }

//   getReports(): Observable<any[]> {
//     return this.http.get<any[]>(this.reportsApiUrl)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   retriveReports(): Observable<any[]> {
//     return this.http.get<any[]>(this.retrieveLocalApiUrl)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

// private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'An unknown error occurred!'; // Default message
    
//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       // Server-side error
//       if (error.status === 400 && error.error.errors) {
//         // Validation errors
//         const validationErrors = error.error.errors;
//         errorMessage = this.formatValidationErrors(validationErrors);
//       } else {
//         // General server error
//         errorMessage = `Server-side error: ${error.status}, message: ${error.message}, response: ${error.error ? JSON.stringify(error.error) : 'N/A'}`;
//       }
//     }

//     // Log the full error for debugging
//     console.error('Full error details:', error);

//     // Return the error message (structured if needed)
//     return throwError({
//       message: errorMessage,
//       status: error.status,
//       error: error.error,
//     });
//   }

//   // Helper function to format validation errors
//   private formatValidationErrors(errors: any): string {
//     let formattedErrors = 'Validation errors:\n';
//     for (const key in errors) {
//       if (errors.hasOwnProperty(key)) {
//         formattedErrors += `${key}: ${errors[key].join(', ')}\n`;
//       }
//     }
//     return formattedErrors;
//   }


//   // Fetch all nationwide reports
//   getNationwideReports(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/retrieve/nationwide`);
//   }

//   // Fetch local station reports (specific to logged-in station)
//   getLocalReports(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/retrieve/local`);
//   }

//   // Fetch reports specific to a citizen
//   getCitizenReports(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/retrieve/citizen`);
//   }

//   // Fetch categorized reports
//   getCategorizedReports(subcategoryId: number): Observable<any> {
//     return this.http.get(`${this.apiUrl}/retrieve/category/${subcategoryId}`);
//   }

//   // Fetch reports by specific crime ID
//   getCrimeReports(crimeId: number): Observable<any> {
//     return this.http.get(`${this.apiUrl}/retrieve/case/${crimeId}`);
//   }
// }
// function throwError(arg0: { message: string; status: number; error: any; }): Observable<never> {
//   throw new Error('Function not implemented.');
// }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// export interface IReport {  // Renamed to PascalCase
//   report_id: number;
//   type: string;
//   complainant: string;  // Fixed typo from 'complaint' to 'complainant' (as per HTML)
//   dateReceived: string;  // Fixed typo 'datteReceived' to 'dateReceived'
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CaseQueueService {
//   private apiUrl = 'https://localhost:7108';  // Backend API endpoint
//   private reportsApiUrl = `${this.apiUrl}/api/report/retrieve/citizen`;
//   private retrieveLocalApiUrl = `${this.apiUrl}/api/report/retrieve/local`;

//   constructor(private http: HttpClient) {}

//   // Fetch reports for citizens (rename or merge if needed)
//   getReports(): Observable<IReport[]> {
//     return this.http.get<IReport[]>(this.reportsApiUrl)
//       .pipe(catchError(this.handleError));  // Improved typing
//   }

//   // Fetch local reports (corrected method name spelling)
//   retrieveReports(): Observable<IReport[]> {
//     return this.http.get<IReport[]>(this.retrieveLocalApiUrl)
//       .pipe(catchError(this.handleError));
//   }

//   // Error handling function (use RxJS throwError)
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'An unknown error occurred!';
    
//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       // Server-side error
//       if (error.status === 400 && error.error.errors) {
//         // Validation errors
//         const validationErrors = error.error.errors;
//         errorMessage = this.formatValidationErrors(validationErrors);
//       } else {
//         errorMessage = `Server-side error: ${error.status}, message: ${error.message}, response: ${error.error ? JSON.stringify(error.error) : 'N/A'}`;
//       }
//     }

//     // Log the full error for debugging
//     console.error('Full error details:', error);

//     // Return the error as an observable
//     return throwError({
//       message: errorMessage,
//       status: error.status,
//       error: error.error,
//     });
//   }

//   // Helper function to format validation errors
//   private formatValidationErrors(errors: any): string {
//     let formattedErrors = 'Validation errors:\n';
//     for (const key in errors) {
//       if (errors.hasOwnProperty(key)) {
//         formattedErrors += `${key}: ${errors[key].join(', ')}\n`;
//       }
//     }
//     return formattedErrors;
//   }

//   // Fetch all nationwide reports
//   getNationwideReports(): Observable<IReport[]> {
//     return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/nationwide`)
//       .pipe(catchError(this.handleError));
//   }

//   // Fetch local station reports
//   getLocalReports(): Observable<IReport[]> {
//     return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/local`)
//       .pipe(catchError(this.handleError));
//   }

//   // Fetch reports specific to a citizen
//   getCitizenReports(): Observable<IReport[]> {
//     return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/citizen`)
//       .pipe(catchError(this.handleError));
//   }

//   // Fetch categorized reports
//   getCategorizedReports(subcategoryId: number): Observable<IReport[]> {
//     return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/category/${subcategoryId}`)
//       .pipe(catchError(this.handleError));
//   }

//   // Fetch reports by specific crime ID
//   getCrimeReports(crimeId: number): Observable<IReport[]> {
//     return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/case/${crimeId}`)
//       .pipe(catchError(this.handleError));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface IReport {
  report_id: number;
  type: string;
  complainant: string;
  dateReceived: string;
}

@Injectable({
  providedIn: 'root'
})
export class CaseQueueService {
  private apiUrl = 'https://localhost:7108';  // Backend API endpoint
  private reportsApiUrl = `${this.apiUrl}/api/report/retrieve/local`;
  private retrieveNationwideApiUrl = `${this.apiUrl}/report/retrieve/nationwide`;

  constructor(private http: HttpClient) {}

  // Helper function to get the session token (from localStorage)
  private getSessionToken(): string | null {
    return localStorage.getItem('session_token');  // Replace 'session_token' with your token key
  }

  // Helper function to get the headers with the session token
  private getHeaders(): HttpHeaders {
    const sessionToken = this.getSessionToken();
    return new HttpHeaders({
      'Authorization': sessionToken ? `Bearer ${sessionToken}` : ''
    });
  }

  // Fetch reports for citizens
  getReports(): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(this.reportsApiUrl, { headers })
      .pipe(catchError(this.handleError));
  }

  // Fetch local reports
  retrieveReports(): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(this.retrieveNationwideApiUrl, { headers })
      .pipe(catchError(this.handleError));
  }

  // Submit a new report (implementing the submitReport method)
  submitReport(formData: any): Observable<any> {
    const headers = this.getHeaders();  // Include the session token in headers
    return this.http.post<any>(`${this.apiUrl}/api/report/submit`, formData, { headers })
      .pipe(catchError(this.handleError));  // Handle errors
  }

  // Error handling function
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.status === 400 && error.error.errors) {
        const validationErrors = error.error.errors;
        errorMessage = this.formatValidationErrors(validationErrors);
      } else {
        errorMessage = `Server-side error: ${error.status}, message: ${error.message}, response: ${error.error ? JSON.stringify(error.error) : 'N/A'}`;
      }
    }

    // Log the full error for debugging
    console.error('Full error details:', error);

    // Return the error as an observable
    return throwError({
      message: errorMessage,
      status: error.status,
      error: error.error,
    });
  }

  // Helper function to format validation errors
  private formatValidationErrors(errors: any): string {
    let formattedErrors = 'Validation errors:\n';
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        formattedErrors += `${key}: ${errors[key].join(', ')}\n`;
      }
    }
    return formattedErrors;
  }

  // Fetch all nationwide reports
  getNationwideReports(): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/nationwide`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Fetch local station reports
  getLocalReports(): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/local`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Fetch reports specific to a citizen
  getCitizenReports(): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/citizen`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Fetch categorized reports
  getCategorizedReports(subcategoryId: number): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/category/${subcategoryId}`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Fetch reports by specific crime ID
  getCrimeReports(crimeId: number): Observable<IReport[]> {
    const headers = this.getHeaders();  // Get headers with session token
    return this.http.get<IReport[]>(`${this.apiUrl}/retrieve/case/${crimeId}`, { headers })
      .pipe(catchError(this.handleError));
  }
}

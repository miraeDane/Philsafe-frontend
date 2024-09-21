// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class PoliceRegisterService {
//   private apiUrl = 'https://localhost:7108/api/police'; // Replace with your actual API URL

//   constructor(private http: HttpClient) {}

//   // Function to register a new police user
//   register(data: any): Observable<any> {
//     // Setting headers if necessary, assuming API expects JSON
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };

//     return this.http.post<any>(this.apiUrl, data, httpOptions)
//       .pipe(
//         catchError(this.handleError) // Error handling using RxJS operators
//       );
//   }

//   // Error handling method
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'Unknown error occurred!';
//     if (error.error instanceof ErrorEvent) {
//       // Client-side or network error
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       // Backend returned an unsuccessful response code.
//       errorMessage = `Server returned code: ${error.status}, ` +
//                      `error message: ${error.message}, ` +
//                      `response body: ${error.error ? JSON.stringify(error.error) : 'N/A'}`;
//     }
    
//     // Log the complete error response for debugging purposes
//     console.error('Full Error Details:', error);

//     // Return an observable with a user-facing error message
//     return throwError(errorMessage);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class PoliceRegisterService {
//   private apiUrl = 'https://localhost:7108/api/police'; // Replace with your actual API URL

//   constructor(private http: HttpClient) {}

//   // Function to register a new police user
//   register(data: any): Observable<any> {
//     // Setting headers, assuming API expects JSON
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };

//     return this.http.post<any>(this.apiUrl, data, httpOptions)
//       .pipe(
//         catchError(this.handleError) // Error handling using RxJS operators
//       );
//   }

//   // Error handling method
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'Unknown error occurred!';
    
//     if (error.error instanceof ErrorEvent) {
//       // Client-side or network error
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       // Backend error
//       if (error.status === 400 && error.error.errors) {
//         // Extract and return validation errors
//         const validationErrors = error.error.errors;
//         errorMessage = this.formatValidationErrors(validationErrors);
//       } else {
//         errorMessage = `Server returned code: ${error.status}, ` +
//                        `message: ${error.message}, ` +
//                        `response body: ${error.error ? JSON.stringify(error.error) : 'N/A'}`;
//       }
//     }
    
//     // Log the full error for debugging purposes
//     console.error('Full Error Details:', error);

//     // Return the observable with the user-facing error message
//     return throwError(errorMessage);
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
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoliceRegisterService {
  private apiUrl = 'https://localhost:7108/api/police'; // API URL for registration
  private ranksApiUrl = 'https://localhost:7108/api/police/load/ranks'; // API URL for fetching ranks

  constructor(private http: HttpClient) {}

  // Function to register a new police user
  register(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Function to get the list of ranks
  getRanks(): Observable<any[]> {
    return this.http.get<any[]>(this.ranksApiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Enhanced error handling method
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!'; // Default message
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.status === 400 && error.error.errors) {
        // Validation errors
        const validationErrors = error.error.errors;
        errorMessage = this.formatValidationErrors(validationErrors);
      } else {
        // General server error
        errorMessage = `Server-side error: ${error.status}, message: ${error.message}, response: ${error.error ? JSON.stringify(error.error) : 'N/A'}`;
      }
    }

    // Log the full error for debugging
    console.error('Full error details:', error);

    // Return the error message (structured if needed)
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
} 

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// // Define interfaces for better type safety
// interface RegistrationData {
//   rank: string;
//   provincialOffice: string;
//   name: string;
//   regionalOffice: string;
//   officerCommander: string;
//   city: string;
//   badgeNumber: string;
//   wcpc: string;
//   investigator: string;
//   unit: string;
//   role: string;
//   debutDate: string;
//   datetimeCreated: string;
//   createdBy: string;
// }

// interface Rank {
//   rank_id: string;
//   rank_full: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class PoliceRegisterService {
//   private apiUrl = 'https://localhost:7108/api/police'; // API URL for registration
//   private ranksApiUrl = 'https://localhost:7108/api/police/load/ranks'; // API URL for fetching ranks

//   constructor(private http: HttpClient) {}

//   // Function to register a new police user
//   register(data: RegistrationData): Observable<any> {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };

//     return this.http.post<any>(this.apiUrl, data, httpOptions)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   // Function to get the list of ranks
//   getRanks(): Observable<Rank[]> {
//     return this.http.get<Rank[]>(this.ranksApiUrl)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   // Enhanced error handling method
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'An unknown error occurred!'; // Default message
    
//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       // Server-side error
//       if (error.status === 400 && error.error && error.error.errors) {
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
//     return throwError(() => ({
//       message: errorMessage,
//       status: error.status,
//       error: error.error,
//     }));
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
// }
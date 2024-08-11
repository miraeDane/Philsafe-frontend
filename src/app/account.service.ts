import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

// Define interfaces for better type safety
interface Account {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  role: string; // Added role field
  // Add other relevant fields
}

interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  civilStatus: string;
  // Add other relevant fields
}

interface Location {
  region: string;
  province: string;
  municipality: string;
  barangay: string;
  street: string;
  blockLotUnit: string;
  // Add other relevant fields
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountURL = 'http://localhost:5100/api/account/signup';
  private personURL = 'http://localhost:5100/api/person';
  private locationURL = 'http://localhost:5100/api/location/create/';

  constructor(private http: HttpClient) {}

  postAccount(data: Account): Observable<any> {
    return this.http.post(this.accountURL, data).pipe(
      catchError(this.handleError)
    );
  }

  postPerson(data: Person): Observable<any> {
    return this.http.post(this.personURL, data).pipe(
      catchError(this.handleError)
    );
  }

  postLocation(zipCode: number, data: Location): Observable<any> {
    const url = `${this.locationURL}${zipCode}`;
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    );
  }

  createOrRetrievePerson(personData: Person): Observable<any> {
    return this.http.post(this.personURL, personData, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return { personFound: true, personId: response.body.id }; 
          } else if (response.status === 302) {
            console.warn('Person found, but redirected:', response);
            return { personFound: true, personId: response.headers.get('Location') };
          } else {
            return { personFound: false, personId: null };
          }
        }),
        catchError(this.handleError)
      );
  }

  createOrRetrieveLocation(locationData: Location, zipCode: number): Observable<any> {
    return this.http.post(`${this.locationURL}${zipCode}`, locationData, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return { locationFound: true, locationId: response.body.id }; 
          } else if (response.status === 302) {
            console.warn('Location found, but redirected:', response);
            return { locationFound: true, locationId: response.headers.get('Location') };
          } else {
            return { locationFound: false, locationId: null };
          }
        }),
        catchError(this.handleError)
      );
  }

  getPersonById(id: number): Observable<Person> {
    const url = `${this.personURL}/retrieve/${id}`;
    return this.http.get<Person>(url).pipe(
      catchError(this.handleError)
    );
  }

  getLocationById(id: number): Observable<Location> {
    const url = `${this.locationURL}/retrieve/${id}`;
    return this.http.get<Location>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
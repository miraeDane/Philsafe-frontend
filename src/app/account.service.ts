import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

interface LocationResult{
  message:string;
  code: string;
  id:number;
}
// Define interfaces for better type safety
export interface IAccount {
  firstname: string;
  middlename: string;
  lastname: string;
  sex: string;
  birthdate: string;
  civilStatus: string;
  bioStatus: boolean;
  email: string;
  telNum?: string;
  password: string;
  contactNum: string;
  homeAddressId: number;
  workAddressId: number;
  personId: number;
  role: string;
  profilePic?: string
}

export interface IPerson {
  firstname: string;
  middlename: string;
  lastname: string;
  sex: string;
  birthdate: string;
  civilStatus: string;
  bioStatus: boolean;
}

export interface ILocation {
  region: string;
  province: string;
  municipality: string;
  barangay: string;
  street: string;
  blockLotUnit: string;
  zipCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountURL = 'https://localhost:7108/api/account/signup';
  private personURL = 'https://localhost:7108/api/person';
  private locationURL = 'https://localhost:7108/api/location/create/';
  private options = {headers: new HttpHeaders({responseType: "json"})}
  

  constructor(private http: HttpClient) {
  }

  postAccount(data: IAccount): Observable<any> {
    return this.http.post(this.accountURL, data).pipe(
      catchError(this.handleError)
    );
  }
  
  postPerson(data: IPerson): Observable<any> {
    return this.http.post(this.personURL, data).pipe(
      catchError(this.handleError)
    );
  }

  postLocation(zipCode: number, data: ILocation): Observable<any> {
    const url = `${this.locationURL}${zipCode}`;
    return this.http.post(url, data, this.options ).pipe(
      catchError(this.handleError)
    );
  }

  createOrRetrievePerson(personData: IPerson): Observable<any> {
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

  createOrRetrieveLocation(locationData: ILocation, zipCode: number): Observable<any> {
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

  getPersonById(id: number): Observable<IPerson> {
    const url = `${this.personURL}/retrieve/${id}`;
    return this.http.get<IPerson>(url).pipe(
      catchError(this.handleError)
    );
  }

  getLocationById(id: number): Observable<any> {
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
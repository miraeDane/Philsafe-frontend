// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Observable, catchError, map, throwError } from 'rxjs';

// export interface IPolice {
//     unit: string;
//     role: string;
//     badgeNumber: string;
//     debutDate: string;
//     stationId?: number;
//     personId?: number;
//     pfpId?: number;
//     rankId?: number;
//     createdBy: string;
//     datetimeCreated: string;
//   }

// export interface IAccount {
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   sex: string;
//   birthdate: string;
//   civilStatus: string;
//   bioStatus: boolean;
//   email: string;
//   telNum?: string;
//   password: string;
//   contactNum: string;
//   homeAddressId: number;
//   workAddressId: number;
//   personId: number;
//   role: string;
//   profilePic?: string
// }


// export interface IPerson {
//   person_id?: number;
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   sex: string;
//   birthdate: string;
//   civilStatus: string;
//   bioStatus: boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class PersonService {
//   // getPersons() {
//   //   throw new Error('Method not implemented.');
//   // }
//   private base = 'https://localhost:7108';
//   private accountURL = 'https://localhost:7108/api/account/signup/upgrade';
//   private personURL = 'https://localhost:7108/api/person';
//   private policeURL = 'https://localhost:7108/api/police';
//   private locationURL = 'https://localhost:7108/api/location/create/';
//   private options = {headers: new HttpHeaders({responseType: "json"})} 


//   constructor(private http: HttpClient) { }

//   create(data: IPolice): Observable<any> {
//     const url = `${this.base}/api/police`;
//     return this.http.post(url, data).pipe(
//       catchError(this.handleError)
//     );
//   }

//   getPersons(): Observable<any> {
//     return this.http.get(`${this.base}/api/person/retrieve/all`).pipe(
//       catchError(this.handleError)
//     );
//   }

//   postAccount(data: IAccount): Observable<any> {
//     return this.http.post(this.accountURL, data).pipe(
//       catchError(this.handleError)
//     );
//   }
  
//   postPerson(data: IPerson): Observable<any> {
//     return this.http.post(this.personURL, data).pipe(
//       catchError(this.handleError)
//     );
//   }

//   createOrRetrievePolice(policeData: IPolice): Observable<any> {
//     return this.http.post(this.policeURL, policeData, { observe: 'response' })
//       .pipe(
//         map((response: HttpResponse<any>) => {
//           if (response.status === 200) {
//             return { personFound: true, personId: response.body.id }; 
//           } else if (response.status === 302) {
//             console.warn('Person found, but redirected:', response);
//             return { personFound: true, personId: response.headers.get('Location') };
//           } else {
//             return { personFound: false, personId: null };
//           }
//         }),
//         catchError(this.handleError)
//       );
//   }

//   registerPolice(policeData: any) {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post('/api/police', policeData, { headers });
//   }
  
//   getPersonById(id: number): Observable<IPerson> {
//     const url = `${this.personURL}/retrieve/${id}`;
//     return this.http.get<IPerson>(url).pipe(
//       catchError(this.handleError)
//     );
//   }

//   getLocationById(id: number): Observable<any> {
//     const url = `${this.locationURL}/retrieve/${id}`;
//     return this.http.get<Location>(url).pipe(
//       catchError(this.handleError)
//     );
//   }


//   getAll(): Observable<any> {
//     const url = `${this.base}/api/person/retrieve/all`;
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
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Observable, catchError, map, throwError } from 'rxjs';

// export interface IPolice {
//   unit: string;
//   role: string;
//   badgeNumber: string;
//   debutDate: string;
//   station_Id?: number;
//   personId?: number;
//   pfpId?: number;
//   rank_Id?: number;
//   createdBy: string;
//   datetimeCreated: string;
// }

// export interface IAccount {
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   sex: string;
//   birthdate: string;
//   civilStatus: string;
//   bioStatus: boolean;
//   email: string;
//   telNum?: string;
//   password: string;
//   contactNum: string;
//   homeAddressId: number;
//   workAddressId: number;
//   personId: number;
//   role: string;
//   profilePic?: string;
// }

// export interface IPerson {
//   person_id?: number;
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   sex: string;
//   birthdate: string;
//   civilStatus: string;
//   bioStatus: boolean;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class PersonService {
//   private base = 'https://localhost:7108';
//   private accountURL = `${this.base}/api/account/signup/upgrade`; // DRY principle for URL definitions
//   private personURL = `${this.base}/api/person`;
//   private policeURL = `${this.base}/api/police`;
//   private locationURL = `${this.base}/api/location/create/`;

//   private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//   constructor(private http: HttpClient) {}

//   create(data: IPolice): Observable<any> {
//     return this.http
//       .post(this.policeURL, data, { headers: this.headers })
//       .pipe(catchError(this.handleError));
//   }

//   getPersons(): Observable<any> {
//     return this.http
//       .get(`${this.personURL}/retrieve/all`)
//       .pipe(catchError(this.handleError));
//   }

//   postAccount(data: IAccount): Observable<any> {
//     return this.http
//       .post(this.accountURL, data, { headers: this.headers })
//       .pipe(catchError(this.handleError));
//   }

//   postPerson(data: IPerson): Observable<any> {
//     return this.http
//       .post(this.personURL, data, { headers: this.headers })
//       .pipe(catchError(this.handleError));
//   }

//   createOrRetrievePolice(policeData: IPolice): Observable<any> {
//     return this.http
//       .post(this.policeURL, policeData, { headers: this.headers, observe: 'response' })
//       .pipe(
//         map((response: HttpResponse<any>) => {
//           if (response.status === 200) {
//             return { personFound: true, personId: response.body.id };
//           } else {
//             return { personFound: false, personId: null };
//           }
//         }),
//         catchError(this.handleError)
//       );
//   }

//   registerPolice(policeData: IPolice): Observable<any> {
//     return this.http
//       .post(this.policeURL, policeData, { headers: this.headers })
//       .pipe(catchError(this.handleError));
//   }

//   getPersonById(id: number): Observable<IPerson> {
//     return this.http
//       .get<IPerson>(`${this.personURL}/retrieve/${id}`)
//       .pipe(catchError(this.handleError));
//   }

//   getLocationById(id: number): Observable<any> {
//     return this.http
//       .get(`${this.locationURL}/retrieve/${id}`)
//       .pipe(catchError(this.handleError));
//   }

//   getAll(): Observable<any> {
//     return this.http
//       .get(`${this.personURL}/retrieve/all`)
//       .pipe(catchError(this.handleError));
//   }

//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       errorMessage = `Server-side error. Status Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     return throwError(errorMessage);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

export interface IPolice {
  unit: string;
  role: string;
  badgeNumber: string;
  debutDate: string;
  stationID?: number;
  personID?: number;
  pfpId?: number;
  rankID?: number;
  createdBy: string;
  datetimeCreated: string;
}

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
  profilePic?: string;
}

export interface IPerson {
  person_id?: number; 
  firstname: string;
  middlename: string;
  lastname: string;
  sex: string;
  birthdate: string;
  civilStatus: string;
  bioStatus: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly apiUrl = 'https://localhost:7108/api';
  private readonly accountUrl = `${this.apiUrl}/account/signup/upgrade`;
  private readonly personUrl = `${this.apiUrl}/person`;
  private readonly policeUrl = `${this.apiUrl}/police`;
  private readonly locationUrl = `${this.apiUrl}/location`;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  create(policeData: IPolice): Observable<any> {
    return this.http
      .post(this.policeUrl, policeData, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  getPersons(): Observable<IPerson[]> {
    return this.http
      .get<IPerson[]>(`${this.personUrl}/retrieve/all`)
      .pipe(catchError(this.handleError));
  }

  postAccount(data: IAccount): Observable<any> {
    return this.http
      .post(this.accountUrl, data, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  postPerson(data: IPerson): Observable<any> {
    return this.http
      .post(this.personUrl, data, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  createOrRetrievePolice(policeData: IPolice): Observable<any> {
    return this.http
      .post(this.policeUrl, policeData, { headers: this.headers, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200 && response.body && response.body.id) {
            return { personFound: true, personId: response.body.id };
          } else {
            return { personFound: false, personId: null };
          }
        }),
        catchError(this.handleError)
      );
  }

  registerPolice(policeData: IPolice): Observable<any> {
    return this.http
      .post(this.policeUrl, policeData, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  getPersonById(id: number): Observable<IPerson> {
    return this.http
      .get<IPerson>(`${this.personUrl}/retrieve/${id}`)
      .pipe(catchError(this.handleError));
  }

  getLocationById(id: number): Observable<any> {
    return this.http
      .get(`${this.locationUrl}/retrieve/${id}`)
      .pipe(catchError(this.handleError));
  }

  getAll(): Observable<IPerson[]> {
    return this.http
      .get<IPerson[]>(`${this.personUrl}/retrieve/all`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: Status Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);  // Log the error for debugging
    return throwError(() => new Error(errorMessage));
  }
}

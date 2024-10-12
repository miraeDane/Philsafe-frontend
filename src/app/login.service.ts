import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LocalServer } from '../server';

export interface ILogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginURL = 'http://localhost:5100/api/account/login';
  private options = { headers: new HttpHeaders({ responseType: "json" }) };

   //newly initialized constant server link
   private ipUrl = `${LocalServer.ipAddUrl}/api/account/signup`
   private localUrl = `${LocalServer.localUrl}/api/account/signup`

  constructor(private http: HttpClient) { }

  login(data: ILogin): Observable<any> {
    return this.http.post(this.loginURL, data, this.options).pipe(
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
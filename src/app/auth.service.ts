import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { LocalServer } from '../server';

export interface ILogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  // set roles -> localStorage.setItem('roles', window.btoa('admin,user'));
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

  setAuthentication(auth: { token: string, role: string }) {
    const { token, role } = auth
    localStorage.setItem('token', token)
    const accessRolesMap = new Map([
      ['admin', 'user,police,chief,admin'],
      ['user', 'user'],
      ['police', 'police'],
      ['chief', 'police,chief'],
    ])
    const accessRole = accessRolesMap.get(role) || ''
    localStorage.setItem('access-roles', window.btoa(accessRole))
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
  getUserRoles(): Observable<string[]> {
    const roles = localStorage.getItem('access-roles') || null;
    return of(roles ? window.atob(roles).split(',') : [])
  }
 
  isAuthenticated(): Observable<boolean> {
    const authenticated = localStorage.getItem('token') || null;
    return !!authenticated ? of(true) : of(false);
  }

}
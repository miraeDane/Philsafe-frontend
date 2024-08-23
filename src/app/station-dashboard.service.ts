// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StationDashboardService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationDashboardService {
  private apiUrl = 'http://localhost:5100/api/location/retrieve/mapcoordinates';

  constructor(private http: HttpClient) {}

  getReportData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
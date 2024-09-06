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
  private apiUrl = 'https://localhost:7108/api/case/collect/crimedata';

  constructor(private http: HttpClient) {}

  getReportData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
import { TestBed } from '@angular/core/testing';

import { StationDashboardService } from './station-dashboard.service';

describe('StationDashboardService', () => {
  let service: StationDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

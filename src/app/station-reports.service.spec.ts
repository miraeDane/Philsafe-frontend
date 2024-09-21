import { TestBed } from '@angular/core/testing';

import { StationReportsService } from './station-reports.service';

describe('StationReportsService', () => {
  let service: StationReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

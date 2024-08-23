import { TestBed } from '@angular/core/testing';

import { StationListOfOfficerService } from './station-list-of-officer.service';

describe('StationListOfOfficerService', () => {
  let service: StationListOfOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationListOfOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

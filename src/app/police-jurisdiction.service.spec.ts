import { TestBed } from '@angular/core/testing';

import { PoliceJurisdictionService } from './police-jurisdiction.service';

describe('PoliceJurisdictionService', () => {
  let service: PoliceJurisdictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceJurisdictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StationRegistrationService } from './station-registration.service';

describe('StationRegistrationService', () => {
  let service: StationRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

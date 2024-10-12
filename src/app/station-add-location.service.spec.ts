import { TestBed } from '@angular/core/testing';

import { StationAddLocationService } from './station-add-location.service';

describe('StationAddLocationService', () => {
  let service: StationAddLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationAddLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

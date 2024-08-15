import { TestBed } from '@angular/core/testing';

import { StationLoginService } from './station-login.service';

describe('StationLoginService', () => {
  let service: StationLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

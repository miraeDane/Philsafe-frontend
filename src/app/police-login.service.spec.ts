import { TestBed } from '@angular/core/testing';

import { PoliceLoginService } from './police-login.service';

describe('PoliceLoginService', () => {
  let service: PoliceLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

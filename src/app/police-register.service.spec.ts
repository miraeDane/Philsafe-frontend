import { TestBed } from '@angular/core/testing';

import { PoliceRegisterService } from './police-register.service';

describe('PoliceRegisterService', () => {
  let service: PoliceRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

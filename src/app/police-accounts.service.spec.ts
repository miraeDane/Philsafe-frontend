import { TestBed } from '@angular/core/testing';

import { PoliceAccountsService } from './police-accounts.service';

describe('PoliceAccountsService', () => {
  let service: PoliceAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliceAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

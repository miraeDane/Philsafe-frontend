import { TestBed } from '@angular/core/testing';

import { DataSuspectService } from './data-suspect.service';

describe('DataSuspectService', () => {
  let service: DataSuspectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSuspectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

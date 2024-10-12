import { TestBed } from '@angular/core/testing';

import { CaseQueueService } from './case-queue.service';

describe('CaseQueueService', () => {
  let service: CaseQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

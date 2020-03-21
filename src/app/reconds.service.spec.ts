import { TestBed } from '@angular/core/testing';

import { RecondsService } from './reconds.service';

describe('RecondsService', () => {
  let service: RecondsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecondsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

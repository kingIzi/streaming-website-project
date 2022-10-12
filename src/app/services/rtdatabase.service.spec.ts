import { TestBed } from '@angular/core/testing';

import { RtdatabaseService } from './rtdatabase.service';

describe('RtdatabaseService', () => {
  let service: RtdatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtdatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

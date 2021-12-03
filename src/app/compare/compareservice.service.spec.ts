import { TestBed } from '@angular/core/testing';

import { CompareserviceService } from './compareservice.service';

describe('CompareserviceService', () => {
  let service: CompareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BerryService } from './berry.service';

describe('BerryService', () => {
  let service: BerryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

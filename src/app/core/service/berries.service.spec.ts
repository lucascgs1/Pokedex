import { TestBed } from '@angular/core/testing';

import { BerriesService } from './berries.service';

describe('BerriesService', () => {
  let service: BerriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

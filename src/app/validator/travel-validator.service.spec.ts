import { TestBed } from '@angular/core/testing';

import { TravelValidatorService } from './travel-validator.service';

describe('TravelValidatorService', () => {
  let service: TravelValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

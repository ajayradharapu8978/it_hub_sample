import { TestBed } from '@angular/core/testing';

import { EmployeeAuthGaurdService } from './employee-auth-gaurd.service';

describe('EmployeeAuthGaurdService', () => {
  let service: EmployeeAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompanyAuthGaurdService } from './company-auth-gaurd.service';

describe('CompanyAuthGaurdService', () => {
  let service: CompanyAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

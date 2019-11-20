import { TestBed } from '@angular/core/testing';

import { PayeesService } from './payees.service';

describe('PayeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayeesService = TestBed.get(PayeesService);
    expect(service).toBeTruthy();
  });
});

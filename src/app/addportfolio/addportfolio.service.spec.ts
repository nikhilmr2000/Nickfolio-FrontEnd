import { TestBed } from '@angular/core/testing';

import { AddportfolioService } from './addportfolio.service';

describe('AddportfolioService', () => {
  let service: AddportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

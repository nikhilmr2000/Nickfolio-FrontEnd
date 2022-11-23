import { TestBed } from '@angular/core/testing';

import { PortfoliointerceptorService } from './portfoliointerceptor.service';

describe('PortfoliointerceptorService', () => {
  let service: PortfoliointerceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliointerceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

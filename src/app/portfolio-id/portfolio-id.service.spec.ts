import { TestBed } from '@angular/core/testing';

import { PortfolioIdService } from './portfolio-id.service';

describe('PortfolioIdService', () => {
  let service: PortfolioIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

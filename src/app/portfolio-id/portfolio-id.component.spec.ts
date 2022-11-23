import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIdComponent } from './portfolio-id.component';

describe('PortfolioIdComponent', () => {
  let component: PortfolioIdComponent;
  let fixture: ComponentFixture<PortfolioIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

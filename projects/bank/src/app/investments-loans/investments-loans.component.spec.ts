import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsLoansComponent } from './investments-loans.component';

describe('InvestmentsLoansComponent', () => {
  let component: InvestmentsLoansComponent;
  let fixture: ComponentFixture<InvestmentsLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

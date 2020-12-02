import { TestBed } from '@angular/core/testing';

import { SpecialHeaderService } from './special-header.service';

describe('SpecialHeaderService', () => {
  let service: SpecialHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

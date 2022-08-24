import { TestBed } from '@angular/core/testing';

import { ExpSvService } from './exp-sv.service';

describe('ExpSvService', () => {
  let service: ExpSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EditDeleteCreateService } from './edit-delete-create.service';

describe('EditDeleteCreateService', () => {
  let service: EditDeleteCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDeleteCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SkillSvService } from './skill-sv.service';

describe('SkillSvService', () => {
  let service: SkillSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

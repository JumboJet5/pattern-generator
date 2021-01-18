import { TestBed } from '@angular/core/testing';

import { PatternConfigService } from './pattern-config.service';

describe('PatternConfigService', () => {
  let service: PatternConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

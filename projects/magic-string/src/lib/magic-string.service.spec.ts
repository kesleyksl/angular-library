import { TestBed } from '@angular/core/testing';

import { MagicStringService } from './magic-string.service';

describe('MagicStringService', () => {
  let service: MagicStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

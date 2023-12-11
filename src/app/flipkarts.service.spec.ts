import { TestBed } from '@angular/core/testing';

import { FlipkartsService } from './flipkarts.service';

describe('FlipkartsService', () => {
  let service: FlipkartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

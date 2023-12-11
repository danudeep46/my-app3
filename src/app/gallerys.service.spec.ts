import { TestBed } from '@angular/core/testing';

import { GallerysService } from './gallerys.service';

describe('GallerysService', () => {
  let service: GallerysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallerysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

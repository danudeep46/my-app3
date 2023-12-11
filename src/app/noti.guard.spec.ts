import { TestBed } from '@angular/core/testing';

import { NotiGuard } from './noti.guard';

describe('NotiGuard', () => {
  let guard: NotiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

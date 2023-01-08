import { TestBed } from '@angular/core/testing';

import { ViewBadgeService } from './view-badge.service';

describe('ViewBadgeService', () => {
  let service: ViewBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

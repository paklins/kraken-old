import { TestBed } from '@angular/core/testing';

import { OverlayDetectorService } from './overlay-detector.service';

describe('OverlayDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverlayDetectorService = TestBed.get(OverlayDetectorService);
    expect(service).toBeTruthy();
  });
});

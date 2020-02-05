import { TestBed } from '@angular/core/testing';

import { ApkService } from './apk.service';

describe('ApkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApkService = TestBed.get(ApkService);
    expect(service).toBeTruthy();
  });
});

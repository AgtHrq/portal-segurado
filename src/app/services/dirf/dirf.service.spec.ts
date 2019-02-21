import { TestBed, inject } from '@angular/core/testing';

import { DirfService } from './dirf.service';

describe('DirfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirfService]
    });
  });

  it('should be created', inject([DirfService], (service: DirfService) => {
    expect(service).toBeTruthy();
  }));
});

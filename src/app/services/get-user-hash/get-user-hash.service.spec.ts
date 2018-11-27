import { TestBed, inject } from '@angular/core/testing';

import { GetUserHashService } from './get-user-hash.service';

describe('GetUserHashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUserHashService]
    });
  });

  it('should be created', inject([GetUserHashService], (service: GetUserHashService) => {
    expect(service).toBeTruthy();
  }));
});

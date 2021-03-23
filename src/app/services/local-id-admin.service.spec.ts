import { TestBed, inject } from '@angular/core/testing';

import { LocalIdAdminService } from './local-id-admin.service';

describe('LocalIdAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalIdAdminService]
    });
  });

  it('should be created', inject([LocalIdAdminService], (service: LocalIdAdminService) => {
    expect(service).toBeTruthy();
  }));
});

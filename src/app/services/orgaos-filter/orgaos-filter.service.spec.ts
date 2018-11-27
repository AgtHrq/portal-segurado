import { TestBed, inject } from '@angular/core/testing';

import { OrgaosFilterService } from './orgaos-filter.service';

describe('OrgaosFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgaosFilterService]
    });
  });

  it('should be created', inject([OrgaosFilterService], (service: OrgaosFilterService) => {
    expect(service).toBeTruthy();
  }));
});

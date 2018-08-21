import { TestBed, inject } from '@angular/core/testing';

import { OrgaosService } from './orgaos.service';

describe('OrgaosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgaosService]
    });
  });

  it('should be created', inject([OrgaosService], (service: OrgaosService) => {
    expect(service).toBeTruthy();
  }));
});

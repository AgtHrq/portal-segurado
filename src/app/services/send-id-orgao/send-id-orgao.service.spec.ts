import { TestBed, inject } from '@angular/core/testing';

import { SendIdOrgaoService } from './send-id-orgao.service';

describe('SendIdOrgaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendIdOrgaoService]
    });
  });

  it('should be created', inject([SendIdOrgaoService], (service: SendIdOrgaoService) => {
    expect(service).toBeTruthy();
  }));
});

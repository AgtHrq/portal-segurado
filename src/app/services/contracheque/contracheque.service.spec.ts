import { TestBed, inject } from '@angular/core/testing';

import { ContrachequeService } from './contracheque.service';

describe('ContrachequeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContrachequeService]
    });
  });

  it('should be created', inject([ContrachequeService], (service: ContrachequeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { EdtVinculoService } from './edt-vinculo.service';

describe('EdtVinculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdtVinculoService]
    });
  });

  it('should be created', inject([EdtVinculoService], (service: EdtVinculoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { VerificaVinculosService } from './verifica-vinculos.service';

describe('VerificaVinculosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaVinculosService]
    });
  });

  it('should be created', inject([VerificaVinculosService], (service: VerificaVinculosService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ImprimirFichaPeriodoService } from './imprimir-ficha-periodo.service';

describe('ImprimirFichaPeriodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImprimirFichaPeriodoService]
    });
  });

  it('should be created', inject([ImprimirFichaPeriodoService], (service: ImprimirFichaPeriodoService) => {
    expect(service).toBeTruthy();
  }));
});

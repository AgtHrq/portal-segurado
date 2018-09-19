import { TestBed, inject } from '@angular/core/testing';

import { TipoOuvidoriaService } from './tipo-ouvidoria.service';

describe('TipoOuvidoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoOuvidoriaService]
    });
  });

  it('should be created', inject([TipoOuvidoriaService], (service: TipoOuvidoriaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { SendRespostaOuvidoriaService } from './send-resposta-ouvidoria.service';

describe('SendRespostaOuvidoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendRespostaOuvidoriaService]
    });
  });

  it('should be created', inject([SendRespostaOuvidoriaService], (service: SendRespostaOuvidoriaService) => {
    expect(service).toBeTruthy();
  }));
});

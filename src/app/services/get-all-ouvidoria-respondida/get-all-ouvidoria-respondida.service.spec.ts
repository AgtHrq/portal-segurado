import { TestBed, inject } from '@angular/core/testing';

import { GetAllOuvidoriaRespondidaService } from './get-all-ouvidoria-respondida.service';

describe('GetAllOuvidoriaRespondidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllOuvidoriaRespondidaService]
    });
  });

  it('should be created', inject([GetAllOuvidoriaRespondidaService], (service: GetAllOuvidoriaRespondidaService) => {
    expect(service).toBeTruthy();
  }));
});

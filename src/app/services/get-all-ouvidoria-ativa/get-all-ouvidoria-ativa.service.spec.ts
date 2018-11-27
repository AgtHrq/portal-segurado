import { TestBed, inject } from '@angular/core/testing';

import { GetAllOuvidoriaAtivaService } from './get-all-ouvidoria-ativa.service';

describe('GetAllOuvidoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllOuvidoriaAtivaService]
    });
  });

  it('should be created', inject([GetAllOuvidoriaAtivaService], (service: GetAllOuvidoriaAtivaService) => {
    expect(service).toBeTruthy();
  }));
});

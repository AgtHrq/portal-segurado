import { TestBed, inject } from '@angular/core/testing';

import { GetAllOuvidoriaService } from './get-all-ouvidoria.service';

describe('GetAllOuvidoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllOuvidoriaService]
    });
  });

  it('should be created', inject([GetAllOuvidoriaService], (service: GetAllOuvidoriaService) => {
    expect(service).toBeTruthy();
  }));
});

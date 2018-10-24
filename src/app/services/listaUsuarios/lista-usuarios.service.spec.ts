import { TestBed, inject } from '@angular/core/testing';

import { ListaUsuariosService } from './lista-usuarios.service';

describe('ListaUsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaUsuariosService]
    });
  });

  it('should be created', inject([ListaUsuariosService], (service: ListaUsuariosService) => {
    expect(service).toBeTruthy();
  }));
});

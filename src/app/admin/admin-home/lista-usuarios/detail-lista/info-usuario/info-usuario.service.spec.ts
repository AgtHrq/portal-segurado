import { TestBed, inject } from '@angular/core/testing';

import { InfoUsuarioService } from './info-usuario.service';

describe('InfoUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoUsuarioService]
    });
  });

  it('should be created', inject([InfoUsuarioService], (service: InfoUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});

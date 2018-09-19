import { TestBed, inject } from '@angular/core/testing';

import { AddOuvidoriaService } from './add-ouvidoria.service';

describe('AddOuvidoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOuvidoriaService]
    });
  });

  it('should be created', inject([AddOuvidoriaService], (service: AddOuvidoriaService) => {
    expect(service).toBeTruthy();
  }));
});

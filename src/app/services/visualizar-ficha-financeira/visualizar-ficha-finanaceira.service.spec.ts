import { TestBed, inject } from '@angular/core/testing';

import { VisualizarFichaFinanaceiraService } from './visualizar-ficha-finanaceira.service';

describe('VisualizarFichaFinanaceiraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualizarFichaFinanaceiraService]
    });
  });

  it('should be created', inject([VisualizarFichaFinanaceiraService], (service: VisualizarFichaFinanaceiraService) => {
    expect(service).toBeTruthy();
  }));
});

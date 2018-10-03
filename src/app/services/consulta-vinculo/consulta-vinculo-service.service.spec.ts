import { TestBed, inject } from '@angular/core/testing';

import { ConsultaVinculoServiceService } from './consulta-vinculo-service.service';

describe('ConsultaVinculoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaVinculoServiceService]
    });
  });

  it('should be created', inject([ConsultaVinculoServiceService], (service: ConsultaVinculoServiceService) => {
    expect(service).toBeTruthy();
  }));
});

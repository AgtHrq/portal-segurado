import { TestBed, inject } from '@angular/core/testing';

import { AlterarDadosAdminService } from './alterar-dados-admin.service';

describe('AlterarDadosAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlterarDadosAdminService]
    });
  });

  it('should be created', inject([AlterarDadosAdminService],
    (service: AlterarDadosAdminService) => {
        expect(service).toBeTruthy();
  }));
});

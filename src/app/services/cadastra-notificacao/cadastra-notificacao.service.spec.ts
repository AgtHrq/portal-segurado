import { TestBed, inject } from '@angular/core/testing';

import { CadastraNotificacaoService } from './cadastra-notificacao.service';

describe('CadastraNotificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastraNotificacaoService]
    });
  });

  it('should be created', inject([CadastraNotificacaoService], (service: CadastraNotificacaoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { SendIdNotificacaoService } from './send-id-notificacao.service';

describe('SendIdNotificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendIdNotificacaoService]
    });
  });

  it('should be created', inject([SendIdNotificacaoService], (service: SendIdNotificacaoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { GetNotificacoesService } from './get-notificacoes.service';

describe('GetNotificacoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNotificacoesService]
    });
  });

  it('should be created', inject([GetNotificacoesService], (service: GetNotificacoesService) => {
    expect(service).toBeTruthy();
  }));
});

import { AdminNotificacaoModule } from './admin-notificacao.module';

describe('AdminNotificacaoModule', () => {
  let adminNotificacaoModule: AdminNotificacaoModule;

  beforeEach(() => {
    adminNotificacaoModule = new AdminNotificacaoModule();
  });

  it('should create an instance', () => {
    expect(adminNotificacaoModule).toBeTruthy();
  });
});

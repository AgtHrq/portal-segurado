import { AdminSolicitacaoModule } from './admin-solicitacao.module';

describe('AdminSolicitacaoModule', () => {
  let adminSolicitacaoModule: AdminSolicitacaoModule;

  beforeEach(() => {
    adminSolicitacaoModule = new AdminSolicitacaoModule();
  });

  it('should create an instance', () => {
    expect(adminSolicitacaoModule).toBeTruthy();
  });
});

import { AdminCarregarDadosModule } from './admin-carregar-dados.module';

describe('AdminCarregarDadosModule', () => {
  let adminCarregarDadosModule: AdminCarregarDadosModule;

  beforeEach(() => {
    adminCarregarDadosModule = new AdminCarregarDadosModule();
  });

  it('should create an instance', () => {
    expect(adminCarregarDadosModule).toBeTruthy();
  });
});

import { SolicitacaoModule } from './solicitacao.module';

describe('SolicitacaoModule', () => {
  let solicitacaoModule: SolicitacaoModule;

  beforeEach(() => {
    solicitacaoModule = new SolicitacaoModule();
  });

  it('should create an instance', () => {
    expect(solicitacaoModule).toBeTruthy();
  });
});

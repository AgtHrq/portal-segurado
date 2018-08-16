import { AlterarDadosModule } from './alterar-dados.module';

describe('AlterarDadosModule', () => {
  let alterarDadosModule: AlterarDadosModule;

  beforeEach(() => {
    alterarDadosModule = new AlterarDadosModule();
  });

  it('should create an instance', () => {
    expect(alterarDadosModule).toBeTruthy();
  });
});

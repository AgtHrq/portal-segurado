import { AlterarSenhaModule } from './alterar-senha.module';

describe('AlterarSenhaModule', () => {
  let alterarSenhaModule: AlterarSenhaModule;

  beforeEach(() => {
    alterarSenhaModule = new AlterarSenhaModule();
  });

  it('should create an instance', () => {
    expect(alterarSenhaModule).toBeTruthy();
  });
});

import { FichaFinanceiraModule } from './ficha-financeira.module';

describe('FichaFinanceiraModule', () => {
  let fichaFinanceiraModule: FichaFinanceiraModule;

  beforeEach(() => {
    fichaFinanceiraModule = new FichaFinanceiraModule();
  });

  it('should create an instance', () => {
    expect(fichaFinanceiraModule).toBeTruthy();
  });
});

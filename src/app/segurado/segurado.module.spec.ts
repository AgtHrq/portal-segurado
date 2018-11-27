import { SeguradoModule } from './segurado.module';

describe('SeguradoModule', () => {
  let seguradoModule: SeguradoModule;

  beforeEach(() => {
    seguradoModule = new SeguradoModule();
  });

  it('should create an instance', () => {
    expect(seguradoModule).toBeTruthy();
  });
});

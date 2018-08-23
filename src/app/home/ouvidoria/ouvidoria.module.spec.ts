import { OuvidoriaModule } from './ouvidoria.module';

describe('OuvidoriaModule', () => {
  let ouvidoriaModule: OuvidoriaModule;

  beforeEach(() => {
    ouvidoriaModule = new OuvidoriaModule();
  });

  it('should create an instance', () => {
    expect(ouvidoriaModule).toBeTruthy();
  });
});

import { AdminOuvidoriaModule } from './admin-ouvidoria.module';

describe('AdminOuvidoriaModule', () => {
  let adminOuvidoriaModule: AdminOuvidoriaModule;

  beforeEach(() => {
    adminOuvidoriaModule = new AdminOuvidoriaModule();
  });

  it('should create an instance', () => {
    expect(adminOuvidoriaModule).toBeTruthy();
  });
});

import { AdminSeguradoModule } from './admin-segurado.module';

describe('AdminSeguradoModule', () => {
  let adminSeguradoModule: AdminSeguradoModule;

  beforeEach(() => {
    adminSeguradoModule = new AdminSeguradoModule();
  });

  it('should create an instance', () => {
    expect(adminSeguradoModule).toBeTruthy();
  });
});

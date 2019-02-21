import { AdminDirfModule } from './admin-dirf.module';

describe('AdminDirfModule', () => {
  let adminDirfModule: AdminDirfModule;

  beforeEach(() => {
    adminDirfModule = new AdminDirfModule();
  });

  it('should create an instance', () => {
    expect(adminDirfModule).toBeTruthy();
  });
});

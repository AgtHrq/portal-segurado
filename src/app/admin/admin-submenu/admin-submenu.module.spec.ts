import { AdminSubmenuModule } from './admin-submenu.module';

describe('AdminSubmenuModule', () => {
  let adminSubmenuModule: AdminSubmenuModule;

  beforeEach(() => {
    adminSubmenuModule = new AdminSubmenuModule();
  });

  it('should create an instance', () => {
    expect(adminSubmenuModule).toBeTruthy();
  });
});

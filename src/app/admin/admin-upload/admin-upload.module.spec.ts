import { AdminUploadModule } from './admin-upload.module';

describe('AdminUploadModule', () => {
  let adminUploadModule: AdminUploadModule;

  beforeEach(() => {
    adminUploadModule = new AdminUploadModule();
  });

  it('should create an instance', () => {
    expect(adminUploadModule).toBeTruthy();
  });
});

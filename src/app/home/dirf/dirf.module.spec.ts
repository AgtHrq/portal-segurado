import { DirfModule } from './dirf.module';

describe('DirfModule', () => {
  let dirfModule: DirfModule;

  beforeEach(() => {
    dirfModule = new DirfModule();
  });

  it('should create an instance', () => {
    expect(dirfModule).toBeTruthy();
  });
});

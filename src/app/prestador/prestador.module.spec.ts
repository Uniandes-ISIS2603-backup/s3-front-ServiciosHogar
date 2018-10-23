import { PrestadorModule } from './prestador.module';

describe('PrestadorModule', () => {
  let prestadorModule: PrestadorModule;

  beforeEach(() => {
    prestadorModule = new PrestadorModule();
  });

  it('should create an instance', () => {
    expect(prestadorModule).toBeTruthy();
  });
});

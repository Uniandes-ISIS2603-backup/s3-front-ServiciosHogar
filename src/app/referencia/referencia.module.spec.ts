import { ReferenciaModule } from './referencia.module';

describe('ReferenciaModule', () => {
  let referenciaModule: ReferenciaModule;

  beforeEach(() => {
    referenciaModule = new ReferenciaModule();
  });

  it('should create an instance', () => {
    expect(referenciaModule).toBeTruthy();
  });
});

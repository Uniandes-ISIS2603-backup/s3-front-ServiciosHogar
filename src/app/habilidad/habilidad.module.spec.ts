import { HabilidadModule } from './habilidad.module';

describe('HabilidadModule', () => {
  let habilidadModule: HabilidadModule;

  beforeEach(() => {
    habilidadModule = new HabilidadModule();
  });

  it('should create an instance', () => {
    expect(habilidadModule).toBeTruthy();
  });
});

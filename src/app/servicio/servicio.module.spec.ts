import { ServicioModule } from './servicio.module';

describe('ServicioModule', () => {
  let servicioModule: ServicioModule;

  beforeEach(() => {
    servicioModule = new ServicioModule();
  });

  it('should create an instance', () => {
    expect(servicioModule).toBeTruthy();
  });
});

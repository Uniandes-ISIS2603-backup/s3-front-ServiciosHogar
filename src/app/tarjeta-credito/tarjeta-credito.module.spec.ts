import { TarjetaCreditoModule } from './tarjeta-credito.module';

describe('TarjetaCreditoModule', () => {
  let tarjetaCreditoModule: TarjetaCreditoModule;

  beforeEach(() => {
    tarjetaCreditoModule = new TarjetaCreditoModule();
  });

  it('should create an instance', () => {
    expect(tarjetaCreditoModule).toBeTruthy();
  });
});

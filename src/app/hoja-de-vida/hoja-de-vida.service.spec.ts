import { TestBed } from '@angular/core/testing';

import { HojaDeVidaService } from './hoja-de-vida.service';

describe('HojaDeVidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HojaDeVidaService = TestBed.get(HojaDeVidaService);
    expect(service).toBeTruthy();
  });
});

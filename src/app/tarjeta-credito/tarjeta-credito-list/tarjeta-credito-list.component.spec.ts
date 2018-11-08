import {  ComponentFixture, TestBed, async } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import { TarjetaCreditoListComponent } from './tarjeta-credito-list.component';
import {TarjetaCredito} from '../tarjeta-credito';
import {TarjetaCreditoService} from '../tarjeta-credito.service';

describe('TarjetaCreditoListComponent', () => {
  let component: TarjetaCreditoListComponent;
  let fixture: ComponentFixture<TarjetaCreditoListComponent>;
  const tarjetas: TarjetaCredito[] = require('../../../assets/tarjetas.json'); //Constante de la lista de habilidades del JSON


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /**
   * Prueba que exista una lista de habilidades
   */
  it('debe haber una lista de tarjetas', () => {
        component.tarjetas = tarjetas;
        expect(component.tarjetas.length).toEqual(tarjetas.length);
    });

    /**
     * Prueba que los datos dados por el servicio esten correctos.
     */
    it('un prestador debe ser una habilidad (primero y último)', () => {
        component.tarjetas = tarjetas;
        expect(component.tarjetas[0].numero).toEqual(tarjetas[0].numero);
        expect(component.tarjetas[tarjetas.length - 1].numero).toEqual(tarjetas[tarjetas.length - 1].numero);
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import { FacturaListComponent } from './factura-list.component';
import {Factura} from '../factura';
import {FacturaService} from '../factura.service';

describe('FacturaListComponent', () => {
  let component: FacturaListComponent;
  let fixture: ComponentFixture<FacturaListComponent>;
  const facturas: Factura[] = require('../../../assets/facturas.json'); //Constante de la lista de habilidades del JSON

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ]
      providers: [{provide: APP_BASE_HREF, useValue: ''}, FacturaService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /**
   * Prueba que exista una lista de habilidades
   */
  it('debe haber una lista de facturas', () => {
        component.facturas = facturas;
        expect(component.facturas.length).toEqual(facturas.length);
    });

    /**
     * Prueba que los datos dados por el servicio esten correctos.
     */
    it('un prestador debe ser una habilidad (primero y último)', () => {
        component.habilidades = habilidades;
        expect(component.habilidades[0].descripcion).toEqual(habilidades[0].descripcion);
        expect(component.habilidades[habilidades.length - 1].descripcion).toEqual(habilidades[habilidades.length - 1].descripcion);
    });
});

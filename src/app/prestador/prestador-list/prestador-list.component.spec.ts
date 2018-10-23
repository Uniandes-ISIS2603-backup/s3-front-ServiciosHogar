import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import { PrestadorListComponent } from './prestador-list.component';
import {Prestador} from '../prestador';
import {PrestadorService} from '../prestador.service';

describe('PrestadorComponent', () => {
  let component: PrestadorListComponent;
  let fixture: ComponentFixture<PrestadorListComponent>;
  const prestadores: Prestador[] = require('../../../assets/prestadores.json'); //Constante de la lista de prestadores del JSON

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ AppRoutingModule, HttpClientModule, AppModule ],
        declarations: [],
        providers: [{provide: APP_BASE_HREF, useValue: ''}, PrestadorService]
    })
        .compileComponents();
  });

  /**
   * Crea el componente listar del recurso Prestador
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Prueba que se haya creado el componente
   */
  it('debe crear', () => {
    expect(component).toBeTruthy();
  });
  
  /**
   * Prueba que exista una lista de prestadores
   */
  it('debe haber una lista de prestadores', () => {
        component.prestadores = prestadores;
        expect(component.prestadores.length).toEqual(prestadores.length);
    });

    /**
     * Prueba que los datos dados por el servicio esten correctos.
     */
    it('un prestador debe ser un prestador (primero y último)', () => {
        component.prestadores = prestadores;
        expect(component.prestadores[0].nombre).toEqual(prestadores[0].nombre);
        expect(component.prestadores[prestadores.length - 1].nombre).toEqual(prestadores[prestadores.length - 1].nombre);
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import { HabilidadListComponent } from './habilidad-list.component';
import {Habilidad} from '../habilidad';
import {HabilidadService} from '../habilidad.service';

describe('HabilidadListComponent', () => {
  let component: HabilidadListComponent;
  let fixture: ComponentFixture<HabilidadListComponent>;
  const habilidades: Habilidad[] = require('../../../assets/habilidades.json'); //Constante de la lista de habilidades del JSON
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, HabilidadService]
    })
    .compileComponents();
  }));

  /**
   * Crea el componente listar del recurso Habilidad
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Prueba que se haya creado el componente
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /**
   * Prueba que exista una lista de habilidades
   */
  it('debe haber una lista de habilidades', () => {
        component.habilidades = habilidades;
        expect(component.habilidades.length).toEqual(habilidades.length);
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

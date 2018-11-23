import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { ServicioListComponent } from './servicio-list.component';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';

describe('ServicioComponent', () => {
    let component: ServicioListComponent;
    let fixture: ComponentFixture<ServicioListComponent>;
    const servicios: Servicio[] = require('../../../assets/servicios.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, ServicioService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ServicioListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of servicios', () => {
        component.servicios = servicios;
        expect(component.servicios.length).toEqual(servicios.length);
    });

    it('an author should be an servicios (first and last)', () => {
        component.servicios = servicios;
        expect(component.servicios[0].name).toEqual(servicios[0].name);
        expect(component.servicios[servicios.length - 1].name).toEqual(servicios[servicios.length - 1].name);
    });

});
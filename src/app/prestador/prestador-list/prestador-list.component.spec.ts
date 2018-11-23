import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { PrestadorListComponent } from './prestador-list.component';
import { Prestador } from '../prestador';
import { PrestadorService } from '../prestador.service';

describe('PrestadorComponent', () => {
    let component: PrestadorListComponent;
    let fixture: ComponentFixture<PrestadorListComponent>;
    const prestadores: Prestador[] = require('../../../assets/prestadores.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, PrestadorService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrestadorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of prestadores', () => {
        component.prestadores = prestadores;
        expect(component.prestadores.length).toEqual(prestadores.length);
    });

    it('an author should be an prestadores (first and last)', () => {
        component.prestadores = prestadores;
        expect(component.prestadores[0].name).toEqual(prestadores[0].name);
        expect(component.prestadores[prestadores.length - 1].name).toEqual(prestadores[prestadores.length - 1].name);
    });

});
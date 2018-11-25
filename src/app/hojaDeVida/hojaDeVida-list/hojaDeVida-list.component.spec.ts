import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { HojaDeVidaListComponent } from './hojaDeVida-list.component';
import { HojaDeVida } from '../hojaDeVida';
import { HojaDeVidaService } from '../hojaDeVida.service';

describe('HojaDeVidaComponent', () => {
    let component: HojaDeVidaListComponent;
    let fixture: ComponentFixture<HojaDeVidaListComponent>;
    const hojasDeVida: HojaDeVida[] = require('../../../assets/hojasDeVida.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, HojaDeVidaService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HojaDeVidaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of hojasDeVida', () => {
        component.hojasDeVida = hojasDeVida;
        expect(component.hojasDeVida.length).toEqual(hojasDeVida.length);
    });

    it('an author should be an hojasDeVida (first and last)', () => {
        component.hojasDeVida = hojasDeVida;
        expect(component.hojasDeVida[0].name).toEqual(hojasDeVida[0].name);
        expect(component.hojasDeVida[hojasDeVida.length - 1].name).toEqual(hojasDeVida[hojasDeVida.length - 1].name);
    });

});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { FacturaListComponent } from './factura-list.component';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';

describe('FacturaComponent', () => {
    let component: FacturaListComponent;
    let fixture: ComponentFixture<FacturaListComponent>;
    const facturas: Factura[] = require('../../../assets/facturas.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, FacturaService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FacturaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of facturas', () => {
        component.facturas = facturas;
        expect(component.facturas.length).toEqual(facturas.length);
    });

});
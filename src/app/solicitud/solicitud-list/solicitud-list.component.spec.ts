import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { SolicitudListComponent } from './solicitud-list.component';
import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitud.service';

describe('SolicitudComponent', () => {
    let component: SolicitudListComponent;
    let fixture: ComponentFixture<SolicitudListComponent>;
    const solicitudes: Solicitud[] = require('../../../assets/solicitudes.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, SolicitudService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SolicitudListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of solicitudes', () => {
        component.solicitudes = solicitudes;
        expect(component.solicitudes.length).toEqual(solicitudes.length);
    });

});
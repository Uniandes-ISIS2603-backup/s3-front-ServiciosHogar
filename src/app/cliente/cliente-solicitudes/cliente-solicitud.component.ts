import { Component, OnInit, Input, } from '@angular/core';
import { Solicitud } from '../solicitud';

@Component({
    selector: 'app-cliente-solicitudes',
    templateUrl: './cliente-solicitud.component.html',
})
export class ClienteSolicitudComponent implements OnInit {
    @Input() clienteSolicitudes : Solicitud [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a solicitud is posted to update the solicitud
     */
    updateSolicitudes(solicitudes:Solicitud[]): void {
        this.clienteSolicitudes = solicitudes;
    }
    
    ngOnInit(){
    }
}
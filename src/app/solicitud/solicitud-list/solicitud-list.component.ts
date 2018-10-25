import { Component, OnInit } from '@angular/core';

//Importar Solicitud
import {SolicitudService} from '../solicitud.service';
import {Solicitud} from '../solicitud';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit 
{
    /**
     * Constructor del componente
     * @param solicitudService - El servicio de la solicitud
     */
    constructor(private solicitudService: SolicitudService) {}
    
    /**
     * Arreglo de solicitudes.
     */
    solicitudes: Solicitud[];
    
    /**
     * Le pregunta al servicio para actualizar la lista de solicitudes.
     */
    getSolicitudes(): void 
    {
        this.solicitudService.getSolicitudes()
            .subscribe(solicitudes => this.solicitudes = solicitudes);
    }
    
    /**
     * Inicializará el componente y retornará la lista de servicios de la solicitud
     * Se llama cuando se crea el componente.
     */
    ngOnInit() 
    {
        this.getSolicitudes();
    }

}

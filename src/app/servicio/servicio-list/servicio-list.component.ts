import { Component, OnInit } from '@angular/core';

//Importar Servicio
import {ServicioService} from '../servicio.service';
import {Servicio} from '../servicio';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit 
{
    /**
     * Constructor del componente
     * @param servicioService - El servicio del servicio
     */
    constructor(private servicioService: ServicioService) {}
    
    /**
     * Arreglo de servicios.
     */
    servicios: Servicio[];
    
    /**
     * Le pregunta al servicio para actualizar la lista de servicios.
     */
    getServicios(): void 
    {
        this.servicioService.getServicios()
            .subscribe(servicios => this.servicios = servicios);
    }
    
    /**
     * Inicializará el componente y retornará la lista de servicios del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() 
    {
        this.getServicios();
    }

}

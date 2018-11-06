import { Component, OnInit, Input } from '@angular/core';

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
     * @param servicioService - El servicio de la servicio
     */
    constructor(private servicioService: ServicioService) {}
    
    /**
     * Arreglo de servicios.
     */
    @Input()
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
     * Inicializará el componente y retornará la lista de servicios de la servicio
     * Se llama cuando se crea el componente.
     */
    ngOnInit() 
    {
        this.getServicios();
    }

}

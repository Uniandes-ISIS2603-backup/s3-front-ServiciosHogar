import { Component, OnInit } from '@angular/core';

//Importar Calificacion
import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit 
{
    /**
     * Constructor del componente
     * @param calificacionService - El servicio de la calificacion.
     */
    constructor(private calificacionService: CalificacionService) {}
  
    /**
     * Arreglo de calificaciones.
     */
    calificaciones: Calificacion[];
  
    /**
     * Le pregunta al servicio para actualizar la lista de calificaciones.
     */
    getCalificaciones(): void
    {
        this.calificacionService.getCalificaciones().
            subscribe(calificaciones => this.calificaciones = calificaciones)
    }

    /**
     * Inicializará el componente y retornará la lista de calificaciones del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() 
    {
        this.getCalificaciones();
    }

}

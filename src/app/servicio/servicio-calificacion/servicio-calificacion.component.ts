import { Component, OnInit, Input, } from '@angular/core';
import { Calificacion } from '../calificacion';

@Component({
    selector: 'app-servicio-calificacion',
    templateUrl: './servicio-calificacion.component.html',
})
export class ServicioCalificacionComponent implements OnInit {
    @Input() servicioCalificacion : Calificacion;
    
    public isCollapsed = false;
    
    /**
     * The function called when a calificacion is posted to update the calificacion
     */
    updateCalificacion(calificacion:Calificacion): void {
        this.servicioCalificacion = calificacion;
    }
    
    ngOnInit(){
    }
}




import {Component, OnInit} from '@angular/core';
import {HabilidadService} from '../habilidad.service';
import {Habilidad} from '../habilidad';

/**
 * El componente de la lista de habilidades
 */
@Component({
    selector: 'app-habilidad',
    templateUrl: './habilidad-list.component.html',
    styleUrls: ['./habilidad-list.component.css']
})
export class HabilidadListComponent implements OnInit {

    /**
    * Constructor del componente
    * @param habilidadService El proveedor de servicios de la habilidad
     */
    constructor(private habilidadService: HabilidadService) {}
    
    /**
     * Lista de habilidades que pertenecen a HomeServices
     */
    habilidades: Habilidad[];
    
    /**
     * Le pregunta al servicio para actualizar la lista de habilidades
     */
    getHabilidades(): void {
        this.habilidadService.getHabilidades()
            .subscribe(habilidades => this.habilidades = habilidades);
    }
    
    /*
     * Inicializará el componente y retornará la lista de habilidades del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() {
        this.getHabilidades();
        
    }

}

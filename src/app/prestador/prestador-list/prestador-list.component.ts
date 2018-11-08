import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador'; 

/**
 * El componente de la lista de prestadores
 */
@Component({
  selector: 'app-prestador-list',
  templateUrl: './prestador-list.component.html',
  styleUrls: ['./prestador-list.component.css']
})
export class PrestadorListComponent implements OnInit {
    
    @Input() prestadores: Prestador[];
    /**
     * Constructor del componente
     * @param prestadorService El proveedor de servicios del prestador
     */
    constructor(private prestadorService: PrestadorService, private route: ActivatedRoute) { }
     
    /**
     * Le pregunta al servicio para actualizar la lista de prestadores
     */
    getPrestadores(): void {
        this.prestadorService.getPrestadores()
            .subscribe(prestadores => {
            this.prestadores = prestadores});
    }
    
    /*
     * Inicializará el componente y retornará la lista de prestadores del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() {
       this.getPrestadores();
    }

}

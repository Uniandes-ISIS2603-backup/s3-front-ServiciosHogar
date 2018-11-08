import { Component, OnInit, Input } from '@angular/core';
import { Habilidad } from '../habilidad';

@Component({
    selector: 'app-prestador-habilidades',
    templateUrl: './prestador-habilidades.component.html',
})
export class PrestadorHabilidadComponent implements OnInit {
    
    /**
     * La lista de habilidades del prestador que se va a desplegar
     */
    @Input() prestadorHabilidades : Habilidad [];
    
    /**
     * Si el componente está visible o no
     */
    public isCollapsed = false;
    
    /**
     * La función llamada cuando una habilidad es posteada para actualizar la lista de habilidades
     */
    updateHabilidades(habilidades:Habilidad[]): void {
        this.prestadorHabilidades = habilidades;
        
    }
    
    /**
     * Método que inicializa el componente
     */
    ngOnInit(){}
}



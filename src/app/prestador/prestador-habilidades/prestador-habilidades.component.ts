import { Component, OnInit, Input } from '@angular/core';
import { Habilidad } from '../habilidad';

@Component({
    selector: 'app-prestador-habilidades',
    templateUrl: './prestador-habilidades.component.html',
})
export class PrestadorHabilidadComponent implements OnInit {
    
    @Input() prestadorHabilidades : Habilidad [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a review is posted to update the habilidades
     */
    updateHabilidades(habilidades:Habilidad[]): void {
        this.prestadorHabilidades = habilidades;
        
    }
    
    ngOnInit(){
        
    }
    debug(){
        console.log(this.prestadorHabilidades)
    }
}



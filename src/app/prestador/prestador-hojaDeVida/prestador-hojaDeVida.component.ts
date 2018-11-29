import { Component, OnInit, Input, } from '@angular/core';
import { HojaDeVida } from '../hojaDeVida';

@Component({
    selector: 'app-prestador-hojaDeVida',
    templateUrl: './prestador-hojaDeVida.component.html',
})
export class PrestadorHojaDeVidaComponent implements OnInit {
    @Input() prestadorHojaDeVida: HojaDeVida;

    public isCollapsed = false;
    
    /**
     * The function called when a hojaDeVida is posted to update the hojaDeVida
     */
    updateHojaDeVida(hojaDeVida: HojaDeVida): void {
        this.prestadorHojaDeVida = hojaDeVida;
    }

    ngOnInit() {  
    }
}
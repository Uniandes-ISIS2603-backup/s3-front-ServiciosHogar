import { Component, OnInit, Input, } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
    selector: 'app-cliente-tarjetas',
    templateUrl: './cliente-tarjeta.component.html',
})
export class ClienteTarjetaComponent implements OnInit {
    @Input() clienteTarjetas : Tarjeta [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a tarjeta is posted to update the tarjetas
     */
    updateTarjetas(tarjetas:Tarjeta[]): void {
        this.clienteTarjetas = tarjetas;
    }
    
    ngOnInit(){
    }
}




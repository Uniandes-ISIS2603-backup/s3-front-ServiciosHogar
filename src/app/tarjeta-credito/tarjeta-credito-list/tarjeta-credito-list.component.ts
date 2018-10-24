import { Component, OnInit } from '@angular/core';
import {TarjetaCreditoService} from '../tarjeta-credito.service';
import {TarjetaCredito} from '../tarjeta-credito';


@Component({
  selector: 'app-tarjeta-credito-list',
  templateUrl: './tarjeta-credito-list.component.html',
  styleUrls: ['./tarjeta-credito-list.component.css']
})
export class TarjetaCreditoListComponent implements OnInit {

  constructor(private tarjetaService: TarjetaCreditoService) { }

  tarjetas: TarjetaCredito[];
  /**
     * Le pregunta al servicio para actualizar la lista de habilidades
     */
    getTarjetas(): void {
        this.tarjetaService.getTarjetas()
            .subscribe(tarjetas => this.tarjetas = tarjetas);
    }
    
    /*
     * Inicializará el componente y retornará la lista de habilidades del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() {
        this.getTarjetas();
        
    }

}

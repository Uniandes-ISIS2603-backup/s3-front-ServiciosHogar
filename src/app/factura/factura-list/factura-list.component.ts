import { Component, OnInit } from '@angular/core';
import {FacturaService} from '../factura.service';
import {Factura} from '../factura';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  constructor(private facturaService: FacturaService) { }

  facturas: Factura[];
  /**
     * Le pregunta al servicio para actualizar la lista de habilidades
     */
    getFacturas(): void {
        this.facturaService.getFacturas()
            .subscribe(facturas => this.facturas = facturas);
    }
    
    /*
     * Inicializará el componente y retornará la lista de habilidades del servicio
     * Se llama cuando de crea el componente.
     */
    ngOnInit() {
        this.getFacturas();
        
    }

}

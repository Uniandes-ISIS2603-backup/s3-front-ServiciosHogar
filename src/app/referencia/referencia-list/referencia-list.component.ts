import { Component, OnInit } from '@angular/core';


//Importar Referencia
import {Referencia} from '../referencia';
//Importar el HojaDeVidaService
import {HojaDeVidaService} from '../../hoja-de-vida/hoja-de-vida.service';


@Component({
  selector: 'app-referencia-list',
  templateUrl: './referencia-list.component.html',
  styleUrls: ['./referencia-list.component.css']
})
export class ReferenciaListComponent implements OnInit {

    constructor(private hojaDeVidaService: HojaDeVidaService) { }
  
  referencias: Referencia[];
    
  ngOnInit() {
      this.getReferencias();
  }

    getReferencias():void
    {
        //Obtener actualizada la lista de referencias, que corresponden al HojaDeVidaDetail.
        this.hojaDeVidaService.getReferencias()
            .subscribe(referencias => this.referencias = referencias)
    }

}

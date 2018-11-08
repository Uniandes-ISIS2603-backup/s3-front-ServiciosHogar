import { Component, OnInit } from '@angular/core';


//Importar Referencia
import {Referencia} from '../referencia';
//Importar el ReferenciaService
import { ReferenciaService } from '../referencia.service';


@Component({
  selector: 'app-referencia-list',
  templateUrl: './referencia-list.component.html',
  styleUrls: ['./referencia-list.component.css']
})
export class ReferenciaListComponent implements OnInit {

    referencias: Referencia[];
    nuevaReferencia: Referencia = {
        empresa : '',
        nombreRemitente : '',
        idRemitente: 0,
        telRemitente: 0,
        cargo: '',
        email: '',
        parentesco: ''
    };

constructor(private referenciaService: ReferenciaService) { }
ngOnInit() {
      this.getReferencias();
}
getReferencias(): void {
       //Obtener actualizada la lista de referencias, que corresponden al HojaDeVidaDetail.
       this.referenciaService.getReferencias()
           .subscribe(referencias => this.referencias = referencias)
}

agregarReferencia(){
    console.log(this.nuevaReferencia);
    this.referencias.push(this.nuevaReferencia);
}


}

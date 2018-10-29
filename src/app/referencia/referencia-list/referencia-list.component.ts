import { Component, OnInit } from '@angular/core';


//Importar Referencia
import {ReferenciaService} from '../referencia.service';
import {Referencia} from '../referencia';


@Component({
  selector: 'app-referencia-list',
  templateUrl: './referencia-list.component.html',
  styleUrls: ['./referencia-list.component.css']
})
export class ReferenciaListComponent implements OnInit {

    constructor(private referenciaService: ReferenciaService) { }
  
  referencias: Referencia[];

    getReferencias():void
    {
        this.referenciaService.getReferencias()
            .subscribe(referencias => this.referencias = referencias)
    }

  ngOnInit() {
      this.getReferencias();
  }

}

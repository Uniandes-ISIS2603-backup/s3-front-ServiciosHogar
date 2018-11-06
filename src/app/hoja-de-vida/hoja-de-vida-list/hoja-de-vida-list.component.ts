import { Component, OnInit } from '@angular/core';

//Importar Hoja de Vida
import {HojaDeVidaService} from '../hoja-de-vida.service';
import {HojaDeVida} from '../hoja-de-vida';




@Component({
  selector: 'app-hoja-de-vida-list',
  templateUrl: './hoja-de-vida-list.component.html',
  styleUrls: ['./hoja-de-vida-list.component.css']
})
export class HojaDeVidaListComponent implements OnInit {

  constructor(private hojaDeVidaService: HojaDeVidaService) { }

  /**
   * Arreglo que contiene las hojas de vida
   */
  hojaDeVida: HojaDeVida;
  /**
   * Solicita la lista de hojas de vida y la actualiza.
   */
   getHojasDeVida(): void
  {
      this.hojaDeVidaService.getHojasDeVida()
            .subscribe(hojaDeVida => this.hojaDeVida = hojaDeVida);
  }

  ngOnInit() {
      this.getHojasDeVida();
  }

}

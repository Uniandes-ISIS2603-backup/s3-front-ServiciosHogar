import { Component, OnInit } from '@angular/core';

//Importar Hoja de Vida
import {HojaDeVidaService} from '../hoja-de-vida.service';
import {HojaDeVida} from '../hoja-de-vida';
import {Referencia} from '../../referencia/referencia';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hoja-de-vida-list',
  templateUrl: './hoja-de-vida-list.component.html',
  styleUrls: ['./hoja-de-vida-list.component.css']
})
export class HojaDeVidaListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private hojaDeVidaService: HojaDeVidaService) { }

  /**
   * Arreglo que contiene las hojas de vida
   */
  hojaDeVida: HojaDeVida;
  
  referencias: Referencia[];
  /**
   * Solicita la lista de hojas de vida y la actualiza.
   */
   getHojasDeVida(): void
  {
      this.hojaDeVidaService.getHojasDeVida()
            .subscribe(hojaDeVida => this.hojaDeVida = hojaDeVida);
  }
    
  verReferencias() 
  {
    this.hojaDeVidaService.getReferencias()
    .subscribe(referencias => this.referencias = referencias);
    

  }
  
  ngOnInit() {
      this.getHojasDeVida();
  }

}

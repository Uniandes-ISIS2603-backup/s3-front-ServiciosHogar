import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {HojaDeVida } from './hoja-de-vida'

//Constantes
import { environment } from '../../environments/environment';
import {ReferenciaService} from '../referencia/referencia.service';
import {Referencia} from '../referencia/referencia';
const API_URL = environment.apiURL; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const hojaDeVida = 'prestadores/1/hojaDeVida'; //JSON donde está la información de los prestadores
const referencias = 'referencias'; //Ruta para HojaDeVidaDetail que en este caso es Referencia
@Injectable({
  providedIn: 'root'
})
export class HojaDeVidaService {
    /**
     * Constructor de una hoja de vida
     * @param http HttpClient
     */
constructor(private http: HttpClient){}
  
  /**
   * Devuelve un objeto Observable con un arraglo de los prestadores recuperados del API.
   * @returns Lista con los clientes en tiempo real.
   */
  getHojasDeVida(): Observable<HojaDeVida>
  {
      return this.http.get<HojaDeVida>(API_URL + hojaDeVida)
  }
  
  getReferencias() : Observable<Referencia[]> {
      return this.http.get<Referencia[]>(API_URL + referencias);
}
}

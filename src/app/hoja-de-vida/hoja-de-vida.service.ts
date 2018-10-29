import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {HojaDeVida } from './hoja-de-vida'

//Constantes
const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const hojaDeVida = '/hojaDeVida.json'; //JSON donde está la información de los prestadores


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
  getHojasDeVida(): Observable<HojaDeVida[]>
  {
      return this.http.get<HojaDeVida[]>(API_URL + hojaDeVida)
  }
}

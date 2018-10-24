 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {TarjetaCredito} from './tarjeta-credito';

const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const tarjetas = '/tarjetas.json'; //JSON donde está la información de las habilidades

/**
* The service provider for everything related to facturas
*/
@Injectable()
export class TarjetaCreditoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of authors retrieved from the API
    * @returns The list of authors in real time
    */
    getTarjetas(): Observable<TarjetaCredito[]> {
        return this.http.get<TarjetaCredito[]>(API_URL + tarjetas);
    }
    
}
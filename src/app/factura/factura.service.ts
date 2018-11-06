import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Factura} from './factura';
import {FacturaDetail} from './factura-detail';

const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const facturas = '/facturas.json'; //JSON donde está la información de las habilidades

/**
* The service provider for everything related to facturas
*/
@Injectable()
export class FacturaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of authors retrieved from the API
    * @returns The list of authors in real time
    */
    getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL + facturas);
    }
    
    /**
   * Devuelve un objeto Observable con un arraglo de los prestadores recuperados del API.
   * @returns Lista con los solicitudes en tiempo real.
   */
getFacturaDetail(facturaId): Observable<FacturaDetail> {
  return this.http.get<FacturaDetail>(API_URL + facturas + '/' + facturaId);
}
    
}
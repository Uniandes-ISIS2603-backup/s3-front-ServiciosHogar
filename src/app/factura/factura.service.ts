import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Factura } from './factura';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const facturas = '/facturas';


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
    * Returns the Observable object containing the list of facturas retrieved from the API
    * @returns The list of solicitudes in real time
    */
    getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL + facturas);
    }

    /**
    * Returns the Observable object containing the factura retrieved from the API
    * @returns The factura
    */
    getFactura(facturaId): Observable<Factura> {
        return this.http.get<Factura>(API_URL + facturas + '/' + facturaId);
    }
    
    /**
    * Creates an factura
    * @param factura The factura which will be created
    * @returns The confirmation of the factura's creation
    */
    createFactura(factura): Observable<Factura> {
        return this.http.post<Factura>(API_URL + facturas, factura);
    }
    
    /**
    * Updates an factura
    * @param factura The factura which will be update
    * @returns The confirmation of the factura's update
    */
    updateFactura(factura): Observable<Factura> {
        return this.http.put<Factura>(API_URL + facturas + '/' + factura.id, factura);
    }
}

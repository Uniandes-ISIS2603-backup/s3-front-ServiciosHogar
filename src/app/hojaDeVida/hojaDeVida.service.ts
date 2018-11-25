import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { HojaDeVida } from './hojaDeVida';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const hojasDeVida = '/hojasDeVida';


/**
* The service provider for everything related to hojasDeVida
*/
@Injectable()
export class HojaDeVidaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of hojasDeVida retrieved from the API
    * @returns The list of prestadores in real time
    */
    getHojasDeVida(): Observable<HojaDeVida[]> {
        return this.http.get<HojaDeVida[]>(API_URL + hojasDeVida);
    }

    /**
    * Returns the Observable object containing the hojaDeVida retrieved from the API
    * @returns The hojaDeVida
    */
    getHojaDeVida(hojaDeVidaId): Observable<HojaDeVida> {
        return this.http.get<HojaDeVida>(API_URL + hojasDeVida + '/' + hojaDeVidaId);
    }
    
    /**
    * Creates an hojaDeVida
    * @param hojaDeVida The hojaDeVida which will be created
    * @returns The confirmation of the hojaDeVida's creation
    */
    createHojaDeVida(hojaDeVida): Observable<HojaDeVida> {
        return this.http.post<HojaDeVida>(API_URL + hojasDeVida, hojaDeVida);
    }
    
    /**
    * Updates an hojaDeVida
    * @param hojaDeVida The hojaDeVida which will be update
    * @returns The confirmation of the hojaDeVida's update
    */
    updateHojaDeVida(hojaDeVida): Observable<HojaDeVida> {
        return this.http.put<HojaDeVida>(API_URL + hojasDeVida + '/' + hojaDeVida.id, hojaDeVida);
    }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Prestador} from './prestador';
import {PrestadorDetail} from './prestador-detail';
import { HojaDeVida } from './hojaDeVida';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const prestadores = '/prestadores';
const hojaDeVida = 'hojaDeVida';


/**
* The service provider for everything related to prestadores
*/
@Injectable()
export class PrestadorService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of prestadores retrieved from the API
    * @returns The list of prestadores in real time
    */
    getPrestadores(): Observable<Prestador[]> {
        console.log("holi");
        return this.http.get<Prestador[]>(API_URL + prestadores);
    }

    /**
    * Creates a new prestador
    * @param prestador The new prestador
    * @returns The prestador with its new id if it was created, false if it wasn't
    */
    createPrestador(prestador): Observable<PrestadorDetail> {
        return this.http.post<PrestadorDetail>(API_URL + prestadores, prestador);
    }

    /**
    * Returns the Observable object with the details of an servicio retrieved from the API
    * @returns The servicio details
    */
    getPrestadorDetail(prestadorId): Observable<PrestadorDetail> {
        return this.http.get<PrestadorDetail>(API_URL + prestadores + '/' + prestadorId);
    }

    /**
        * Updates a new prestador
        * @param prestador The updated prestador
        * @returns The updated prestador
        */
    updatePrestador(prestador): Observable<PrestadorDetail> {
        return this.http.put<PrestadorDetail>(API_URL + prestadores + '/' + prestador.id, prestador);
    }
    
    /**
    * Deletes a prestador
    * @param prestadorId The prestador's id
    * @returns True if the prestador was deleted, false otherwise
    */
    deletePrestador(prestadorId): Observable<PrestadorDetail> {
        return this.http.delete<PrestadorDetail>(API_URL + prestadores + '/' + prestadorId);
    }

    /**
    * Creates an hoja de vida
    * @param hojaDeVida The hoja de vida which will be created
    * @returns The confirmation of the hojaDeVida's creation
    */
   createHojaDeVida(prestadorId, hojaDeVida): Observable<HojaDeVida> {
    return this.http.post<HojaDeVida>(API_URL + prestadores + '/' + prestadorId + hojaDeVida, hojaDeVida);
    }
}
